import { useSession } from "@/hooks/useSession";
import { useScreen } from "@/hooks/useScreen";
import { useSound } from "@/hooks/useSound";

export const useSessionActions = () => {
  const { login, logout, lock, unlock } = useSession();
  const { gotoScreen } = useScreen();
  const { play } = useSound();

  const loginUser = (username: string, password: string) => {
    const result = login(username, password);

    if (result.success) {
      play("welcome");
      gotoScreen("greeting");
    }

    return result;
  };

  const logoutUser = () => {
    play("logout");
    logout();
    gotoScreen("greeting");
  };

  const lockUser = () => {
    lock();
    gotoScreen("locked");
  };

  const unlockUser = (password: string) => {
    const success = unlock(password);

    if (success) {
      gotoScreen("desktop");
    }

    return success;
  };

  const reboot = () => {
    gotoScreen("booting");
  };

  return {
    login: loginUser,
    logout: logoutUser,
    lock: lockUser,
    unlock: unlockUser,
    reboot,
  };
};

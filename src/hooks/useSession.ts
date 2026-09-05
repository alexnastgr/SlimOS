import { useCallback } from "react";
import { usersList } from "@/data/users";
import { login, logout } from "@/store/slices/sessionSlice";
import { initializeUserSettings } from "@/store/slices/settingSlice";
import { useAppDispatch, useAppSelector } from "@/store/_hooks";

export const useSession = () => {
  const dispatch = useAppDispatch();

  const { currentUser, isAuthenticated } = useAppSelector(
    (state) => state.session,
  );

  const loginUser = useCallback(
    (username: string, password: string) => {
      const user = usersList.find(
        (user) => user.username === username && user.password === password,
      );

      if (!user) {
        return {
          success: false,
          user: null,
        };
      }

      dispatch(initializeUserSettings(user.uid));
      dispatch(login(user));

      return {
        success: true,
        user,
      };
    },

    [dispatch],
  );

  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return {
    currentUser,
    isAuthenticated,

    login: loginUser,
    logout: logoutUser,
  };
};

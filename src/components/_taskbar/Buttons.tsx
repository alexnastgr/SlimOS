import { Icon } from "@iconify/react";
// hooks
import { useState } from "react";
import { useSession } from "@/hooks/useSession";
import { useSettings } from "@/hooks/useSettings";
import { useScreen } from "@/hooks/useScreen";
import Confirmation from "../modals/Confirmation";

export default function Buttons() {
  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const [rebootModal, setRebootModal] = useState<boolean>(false);

  const { darkMode, toggleDarkMode } = useSettings();

  const { gotoScreen } = useScreen();
  const { logout } = useSession();

  const darkmode = darkMode ? "solar:sun-2-linear" : "solar:moon-linear";

  const logOut = () => {
    setLogoutModal(true);
  };

  const reboot = () => {
    setRebootModal(true);
  };

  return (
    <div className="flex flex-row gap-2">
      {/* dark-light icon */}
      <div className="modeSwitcher" onClick={toggleDarkMode}>
        <Icon icon={darkmode} width={20} height={20} />
      </div>

      {/* reboot icon */}
      <div className="" title={"Reboot"} onClick={reboot}>
        <Icon icon="solar:restart-outline" width={20} height={20} />
      </div>

      {/* logout icon */}
      <div className="text-red-500" onClick={logOut} title={"Logout"}>
        <Icon icon="solar:logout-2-outline" width={20} height={20} />
      </div>

      <Confirmation
        onConfirm={logout}
        onCancel={() => setLogoutModal(false)}
        confirmText="Logout"
        cancelText="Cancel"
        title="Are you sure you want to logout?"
        message="This will close all applications and logout of the system."
        isOpen={logoutModal}
      />

      <Confirmation
        onConfirm={() => gotoScreen("booting")}
        onCancel={() => setRebootModal(false)}
        confirmText="Reboot"
        cancelText="Cancel"
        title="Are you sure you want to reboot?"
        message="This will restart the system."
        isOpen={rebootModal}
      />
    </div>
  );
}

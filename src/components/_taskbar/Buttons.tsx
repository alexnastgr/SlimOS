import { UserAction as UA } from "./UserAction";
// hooks
import { useState } from "react";
import { useSettings } from "@/hooks/useSettings";
import { useSessionActions } from "@/hooks/useSessionActions";
// modal
import Confirmation from "../modals/Confirmation";
import type { Action } from "@/types/user";

const actionInfo = {
  logout: {
    confirmText: "Logout",
    title: "Are you sure you want to logout?",
    message: "This will close all applications and logout of the system.",
  },
  reboot: {
    confirmText: "Reboot",
    title: "Are you sure you want to reboot?",
    message: "This will restart the system.",
  },
  lock: {
    confirmText: "Lock",
    title: "Are you sure you want to lock the system?",
    message: "You will need your password to unlock it.",
  },
};

export default function Buttons() {
  const [action, setAction] = useState<Action>(null);

  const { toggleDarkMode } = useSettings();
  const { logout, reboot, lock } = useSessionActions();

  const actions = {
    logout,
    reboot,
    lock,
  };

  const confirm = () => {
    if (!action) return;

    actions[action]();
    setAction(null);
  };

  const info = action ? actionInfo[action] : null;

  return (
    <div className="relative flex gap-1">
      {/* user actions */}
      <UA
        onClick={toggleDarkMode}
        title={"Switch Theme"}
        icon="proicons:dark-theme"
      />
      <UA
        onClick={() => {
          setAction("lock");
        }}
        title={"Lock"}
        icon="proicons:lock"
      />
      <UA
        onClick={() => {
          setAction("logout");
        }}
        title={"Logout"}
        icon="proicons:door-open"
      />

      <Confirmation
        isOpen={action !== null}
        onConfirm={confirm}
        onCancel={() => setAction(null)}
        confirmText={info?.confirmText ?? ""}
        cancelText="Cancel"
        title={info?.title ?? ""}
        message={info?.message ?? ""}
      />
    </div>
  );
}

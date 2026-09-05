import "@/styles/auth.css";

import { AnimatePresence } from "framer-motion";

// hooks
import { useState } from "react";
import { useScreen } from "@/hooks/useScreen";
import { useSound } from "@/hooks/useSound";
import { useMessage } from "@/hooks/useMessage";
import { useSession } from "@/hooks/useSession";

// components & types
import User from "@/components/User";
import ErrorMessage from "@/components/ErrorMessage";

import { usersList } from "@/data/users";
import type { IUser } from "@/types/user";

import Actions from "./_components/Actions";
import Password from "./_components/Password";

export default function Auth() {
  const [user, setUser] = useState<IUser | null>(null);
  const [pass, setPass] = useState("");
  const { message, showMessage } = useMessage();
  const { gotoScreen } = useScreen();
  const { login } = useSession();
  const { play } = useSound();

  const selectUser = (user: IUser) => {
    setUser(user);
    setPass("");
  };

  const unsetUser = () => {
    setUser(null);
    setPass("");
  };

  const reboot = () => {
    gotoScreen("booting");
  };

  const handleLogin = () => {
    if (!user) return;

    const result = login(user.username, pass);

    if (!result.success) {
      showMessage("Invalid password", "error");

      return;
    }

    play("welcome");
    gotoScreen("desktop");
  };

  return (
    <div className="AuthScreen relative">
      {!user ? (
        <AnimatePresence>
          <div className="users">
            {usersList.map((user) => (
              <User key={user.username} user={user} select={selectUser} />
            ))}
          </div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <div>
            <User user={user} />

            <Password value={pass} onChange={setPass} onLogin={handleLogin} />

            <AnimatePresence>
              {message && (
                <ErrorMessage
                  key="error-message"
                  message={message.text}
                  type={message.type}
                />
              )}
            </AnimatePresence>
          </div>
        </AnimatePresence>
      )}

      <Actions
        showReboot={true}
        showSwitch={!!user}
        onSwitch={unsetUser}
        onReboot={reboot}
      />
    </div>
  );
}

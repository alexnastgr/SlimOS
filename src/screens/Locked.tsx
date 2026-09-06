import "@/styles/auth.css";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
// hooks
import { useSession } from "@/hooks/useSession";
import { useScreen } from "@/hooks/useScreen";
import { useMessage } from "@/hooks/useMessage";
import { useSound } from "@/hooks/useSound";
// components
import User from "@/components/User";
import ErrorMessage from "@/components/ErrorMessage";
import Password from "./_components/Password";

export default function Locked() {
  const [pass, setPass] = useState("");
  const { currentUser } = useSession();
  const { gotoScreen } = useScreen();
  const { message, showMessage } = useMessage();
  const { play } = useSound();

  if (!currentUser) return null;

  const unlock = () => {
    if (pass !== currentUser.password) {
      showMessage("Invalid password", "error");
      play("error");
      setPass("");
      return;
    }

    play("welcome");
    gotoScreen("desktop");
  };

  return (
    <div className="AuthScreen relative">
      <div>
        <User user={currentUser} />

        <Password value={pass} onChange={setPass} onLogin={unlock} />

        <div className="mt-5 h-5 w-full">
          <AnimatePresence>
            {message && (
              <ErrorMessage message={message.text} type={message.type} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

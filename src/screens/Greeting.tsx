import "@/styles/greeting.css";

import { motion } from "framer-motion";
// hooks
import { useEffect } from "react";
import { useSession } from "@/hooks/useSession";
import { useScreen } from "@/hooks/useScreen";

export default function Greeting() {
  const { currentUser, lastUser, action } = useSession();
  const { gotoScreen } = useScreen();

  const user = currentUser ?? lastUser;

  useEffect(() => {
    if (!action) return;

    const timer = setTimeout(() => {
      gotoScreen(action === "login" ? "desktop" : "auth");
    }, 2500);

    return () => clearTimeout(timer);
  }, [action, gotoScreen]);

  if (!user || !action) return null;

  return (
    <motion.div
      className="greetingScreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 2.5,
        times: [0, 0.2, 0.8, 1],
      }}
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="actionLabel">
          {action === "login" ? "Welcome" : "Goodbye"}
        </div>

        <div className="username">
          {user.name}
        </div>
      </div>
    </motion.div>
  );
}

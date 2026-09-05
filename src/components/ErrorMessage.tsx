import { motion } from "framer-motion";
import type { MessageType } from "@/types/messages";

interface Props {
  message: string;
  type: MessageType;
}

export default function ErrorMessage({ message, type }: Props) {
  const styles: Record<MessageType, string> = {
    error: "bg-red-500",
    warning: "bg-yellow-500",
    success: "bg-green-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`errorMsg
        ${styles[type]}
      `}
    >
      {message}
    </motion.div>
  );
}

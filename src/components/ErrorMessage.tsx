import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import type { MessageType } from "@/types/messages";

interface Props {
  message: string;
  type: MessageType;
}

const styles: Record<MessageType, string> = {
  error: "bg-red-500",
  warning: "bg-yellow-500",
  success: "bg-green-500",
};

const icons: Record<MessageType, string> = {
  error: "mdi:alert-circle",
  warning: "mdi:alert",
  success: "mdi:check-circle",
};

export default function ErrorMessage({ message, type }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`errorMsg ${styles[type]}`}
    >
      <Icon icon={icons[type]} className="mr-2" />

      {message}
    </motion.div>
  );
}

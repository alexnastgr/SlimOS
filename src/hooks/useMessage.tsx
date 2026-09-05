import { useEffect, useState } from "react";
import type { Message, MessageType } from "@/types/messages";

export const useMessage = () => {
  const [message, setMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (!message) return;

    const timeout = setTimeout(() => {
      setMessage(null);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [message]);

  const showMessage = (text: string, type: MessageType = "error") => {
    setMessage({
      text,
      type,
    });
  };

  return {
    message,
    showMessage,
  };
};

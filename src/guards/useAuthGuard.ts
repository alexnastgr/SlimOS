import { useEffect } from "react";

import { useSession } from "@/hooks/useSession";
import { useScreen } from "@/hooks/useScreen";

export const useAuthGuard = () => {
  const { isAuthenticated } = useSession();
  const { gotoScreen } = useScreen();

  useEffect(() => {
    if (!isAuthenticated) {
      gotoScreen("auth");
    }
  }, [isAuthenticated, gotoScreen]);

  return isAuthenticated;
};

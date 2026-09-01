import "@/styles/booting.css";
import { Icon } from "@iconify/react";

import { useEffect } from "react";
import { useScreen } from "@/hooks/useScreen";
import { useBootSequence } from "@/hooks/useBootSequence";

export default function Booting() {
  const { step, isReady } = useBootSequence();
  const { gotoScreen } = useScreen();

  useEffect(() => {
    if (isReady) {
      gotoScreen("auth");
    }
  }, [isReady, gotoScreen]);

  return (
    <div className="bootScreen">
      <div className="content text-white">
        <div>
          <Icon
            icon="mdi:apple"
            width={isReady ? 80 : 50}
            className={isReady ? "spin" : "pulse"}
          />
        </div>

        <div
          className={`${isReady ? "flex" : "hidden"} flex-col gap-2 text-center`}
        >
          <div className="font-light text-3xl">Welcome to SlimOS</div>

          <div className="font-semibold text-sm">
            Modern OS experience inspired by macOS
          </div>
        </div>

        <div>{step}</div>
      </div>
    </div>
  );
}

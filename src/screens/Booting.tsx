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
            icon="solar:box-minimalistic-bold"
            color="#b5f200"
            width={50}
            className={isReady ? "spin" : "pulse"}
          />
        </div>

        <div className="text-5xl font-semibold">
          <span>Slim</span>
          <span className="text-[#b5f200]">OS</span>
        </div>
        <div>{step}</div>
      </div>
    </div>
  );
}

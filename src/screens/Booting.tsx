import { Icon } from "@iconify/react";
import { useBootSequence } from "@/hooks/useBootSequence";
import "@/styles/booting.css";

import { useSound } from "@/hooks/useSound";

import logo from "@/assets/logo.svg";
export default function Booting() {
  const { step, isReady } = useBootSequence();

  const { play } = useSound();

  const gotoDesktop = () => {
    play("welcome");
  };

  if (!isReady) {
    // first time system boots
    return (
      <div className="bootScreen font-default">
        {/* boot animation */}
        <div className="content text-white">
          <div className="logo-boot">
            <Icon icon="lucide:box" width={32} />
          </div>
          {/* current step string */}
          <p className="text-sm">{step}...</p>
        </div>
      </div>
    );
  }

  //  first time ready screen
  return (
    <div className="readyScreen bg-url[(images/ready.jpg)]">
      <div className="content text-white">
        <div>
          <img src={logo} alt={"Logo"} width={100} className="spin" />
        </div>

        {/* welcome message */}
        <div className="flex flex-row gap-2 text-3xl font-norican">
          <div className="font-notmal">Welcome to</div>
          <div className="font-semibold">SlimOS</div>
        </div>

        {/* navigate to main desktop area */}
        <button onClick={gotoDesktop} className="btnDesktop">
          Go to Desktop Screen
        </button>
      </div>
    </div>
  );
}

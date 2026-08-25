import { useEffect, useState } from "react";

const steps = ["Loading assets", "Configuring", "Loading settings"];

export function useBootSequence(delay = 2000) {
  const [step, setStep] = useState(steps[0]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let index = 0;

    // set interval
    const interval = setInterval(() => {
      index++;

      if (index >= steps.length) {
        clearInterval(interval);
        setIsReady(true);
        return;
      }

      setStep(steps[index]);
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  // return values
  return {
    step,
    isReady,
  };
}

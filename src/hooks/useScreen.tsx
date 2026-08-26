import { useAppDispatch, useAppSelector } from "@/store/_hooks";
import { setScreen } from "@/store/slices/screenSlice";
import { screens } from "@/screens";

import type { ScreenName } from "@/types/screens";

export function useScreen() {
  const currentScreen = useAppSelector((state) => state.screen.current);

  const dispatch = useAppDispatch();

  const gotoScreen = (screen: ScreenName) => {
    dispatch(setScreen(screen));
  };

  const renderScreen = () => {
    const ScreenComponent = screens[currentScreen].component;

    return <ScreenComponent />;
  };

  return {
    screen: currentScreen,
    gotoScreen,
    renderScreen,
  };
}

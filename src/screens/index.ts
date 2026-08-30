import type { ComponentType } from "react";
import type { ScreenName } from "@/store/slices/screenSlice";

// available screens
import Booting from "@/screens/Booting";
import Auth from "@/screens/Auth";
import Desktop from "@/screens/Desktop";

export interface Screen {
  name: ScreenName;
  component: ComponentType;
}

export const screens: Record<ScreenName, Screen> = {
  booting: {
    name: "booting",
    component: Booting,
  },

  auth: {
    name: "auth",
    component: Auth,
  },

  desktop: {
    name: "desktop",
    component: Desktop,
  },
};

import type { ComponentType } from "react";
import type { ScreenName } from "@/store/slices/screenSlice";

// available screens
import Booting from "@/screens/Booting";
import Greeting from "@/screens/Greeting";
import Auth from "@/screens/Auth";
import Locked from "@/screens/Locked";
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

  locked: {
    name: "locked",
    component: Locked,
  },

  greeting: {
    name: "greeting",
    component: Greeting,
  },
};

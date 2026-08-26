import type { ComponentType } from "react";
import type { ScreenName } from "@/store/slices/screenSlice";

// available screens
import Booting from "@/screens/Booting";
import Login from "@/screens/Login";

export interface Screen {
  name: ScreenName;
  component: ComponentType;
}

export const screens: Record<ScreenName, Screen> = {
  booting: {
    name: "booting",
    component: Booting,
  },

  login: {
    name: "login",
    component: Login,
  },
};

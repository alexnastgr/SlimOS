import { type ISound } from "@/types/sound";

import welcome from "@/assets/sounds/welcome.mp3";
import error from "@/assets/sounds/error.mp3";

export const Sounds: ISound[] = [
  {
    name: "welcome",
    source: welcome,
  },
  {
    name: "error",
    source: error,
  },
];

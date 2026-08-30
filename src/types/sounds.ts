import welcome from "@/assets/sounds/welcome.mp3";
import error from "@/assets/sounds/error.mp3";

export type Sound = {
  name: string;
  source: string;
};

export const Sounds: Sound[] = [
  {
    name: "welcome",
    source: welcome,
  },
  {
    name: "error",
    source: error,
  },
];

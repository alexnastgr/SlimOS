import type { IWallpaper } from "@/types/wallpaper";

export const wallpapers: IWallpaper[] = [
  {
    name: "Aurora",
    image: "/wallpapers/aurora.jpg",
  },
  {
    name: "Mountain",
    image: "/wallpapers/mountain.jpg",
  },
  {
    name: "Ocean",
    image: "/wallpapers/ocean.jpg",
  },
];

export const defaultWallpaper = wallpapers[0];

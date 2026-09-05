import { useCallback } from "react";

import type { IWallpaper } from "@/types/wallpaper";
import type { IUserSettings } from "@/types/settings";
import { defaultWallpaper } from "@/data/wallpapers";

import {
  setDarkMode as setDarkModeAction,
  toggleDarkMode as toggleDarkModeAction,
  setGlassMode as setGlassModeAction,
  toggleGlassMode as toggleGlassModeAction,
  setWallpaper as setWallpaperAction,
  resetUserSettings,
} from "@/store/slices/settingSlice";

import { useAppDispatch, useAppSelector } from "@/store/_hooks";

const defaultSettings: IUserSettings = {
  darkMode: false,
  glassMode: true,
  wallpaper: defaultWallpaper,
};

export const useSettings = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.session.currentUser);

  const settings = useAppSelector((state) => {
    if (!currentUser) {
      return null;
    }

    return state.settings.users[currentUser.uid] ?? defaultSettings;
  });

  const setDarkMode = useCallback(
    (value: boolean) => {
      if (!currentUser) return;

      dispatch(
        setDarkModeAction({
          uid: currentUser.uid,
          value,
        }),
      );
    },

    [dispatch, currentUser],
  );

  const toggleDarkMode = useCallback(() => {
    if (!currentUser) return;

    dispatch(toggleDarkModeAction(currentUser.uid));
  }, [dispatch, currentUser]);

  const setGlassMode = useCallback(
    (value: boolean) => {
      if (!currentUser) return;

      dispatch(
        setGlassModeAction({
          uid: currentUser.uid,
          value,
        }),
      );
    },

    [dispatch, currentUser],
  );

  const toggleGlassMode = useCallback(() => {
    if (!currentUser) return;

    dispatch(toggleGlassModeAction(currentUser.uid));
  }, [dispatch, currentUser]);

  const setWallpaper = useCallback(
    (wallpaper: IWallpaper) => {
      if (!currentUser) return;

      dispatch(
        setWallpaperAction({
          uid: currentUser.uid,
          wallpaper,
        }),
      );
    },

    [dispatch, currentUser],
  );

  const resetSettings = useCallback(() => {
    if (!currentUser) return;

    dispatch(resetUserSettings(currentUser.uid));
  }, [dispatch, currentUser]);

  return {
    settings,

    darkMode: settings?.darkMode ?? false,

    glassMode: settings?.glassMode ?? true,

    wallpaper: settings?.wallpaper ?? defaultWallpaper,

    setDarkMode,
    toggleDarkMode,

    setGlassMode,
    toggleGlassMode,

    setWallpaper,

    resetSettings,
  };
};

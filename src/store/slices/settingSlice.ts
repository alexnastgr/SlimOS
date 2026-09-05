import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { IUserSettings } from "@/types/settings";
import type { IWallpaper } from "@/types/wallpaper";

import { defaultWallpaper } from "@/data/wallpapers";

interface SettingsState {
  users: Record<number, IUserSettings>;
}

const initialState: SettingsState = {
  users: {},
};

const getDefaultSettings = (): IUserSettings => ({
  darkMode: false,
  glassMode: true,
  wallpaper: defaultWallpaper,
});

const settingsSlice = createSlice({
  name: "settings",

  initialState,

  reducers: {
    initializeUserSettings(state, action: PayloadAction<number>) {
      const uid = action.payload;

      if (!state.users[uid]) {
        state.users[uid] = getDefaultSettings();
      }
    },

    setDarkMode(
      state,
      action: PayloadAction<{
        uid: number;
        value: boolean;
      }>,
    ) {
      const { uid, value } = action.payload;

      if (!state.users[uid]) {
        state.users[uid] = getDefaultSettings();
      }

      state.users[uid].darkMode = value;
    },

    toggleDarkMode(state, action: PayloadAction<number>) {
      const uid = action.payload;

      if (!state.users[uid]) {
        state.users[uid] = getDefaultSettings();
      }

      state.users[uid].darkMode = !state.users[uid].darkMode;
    },

    setGlassMode(
      state,
      action: PayloadAction<{
        uid: number;
        value: boolean;
      }>,
    ) {
      const { uid, value } = action.payload;

      if (!state.users[uid]) {
        state.users[uid] = getDefaultSettings();
      }

      state.users[uid].glassMode = value;
    },

    toggleGlassMode(state, action: PayloadAction<number>) {
      const uid = action.payload;

      if (!state.users[uid]) {
        state.users[uid] = getDefaultSettings();
      }

      state.users[uid].glassMode = !state.users[uid].glassMode;
    },

    setWallpaper(
      state,
      action: PayloadAction<{
        uid: number;
        wallpaper: IWallpaper;
      }>,
    ) {
      const { uid, wallpaper } = action.payload;

      if (!state.users[uid]) {
        state.users[uid] = getDefaultSettings();
      }

      state.users[uid].wallpaper = wallpaper;
    },

    resetUserSettings(state, action: PayloadAction<number>) {
      const uid = action.payload;

      state.users[uid] = getDefaultSettings();
    },
  },
});

export const {
  initializeUserSettings,

  setDarkMode,
  toggleDarkMode,

  setGlassMode,
  toggleGlassMode,

  setWallpaper,

  resetUserSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;

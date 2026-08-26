import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ScreenName = "booting" | "login";

interface ScreenState {
  current: ScreenName;
}

const initialState: ScreenState = {
  current: "booting",
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<ScreenName>) => {
      state.current = action.payload;
    },
  },
});

export const { setScreen } = screenSlice.actions;

export default screenSlice.reducer;

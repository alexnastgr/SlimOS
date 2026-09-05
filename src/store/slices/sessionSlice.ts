import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "@/types/user";

interface SessionState {
  currentUser: IUser | null;
  isAuthenticated: boolean;
}

const initialState: SessionState = {
  currentUser: null,
  isAuthenticated: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,

  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = sessionSlice.actions;

export default sessionSlice.reducer;

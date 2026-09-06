import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "@/types/user";

type SessionAction = "login" | "logout" | null;

interface SessionState {
  currentUser: IUser | null;
  lastUser: IUser | null;
  isAuthenticated: boolean;
  isLocked: boolean;
  action: SessionAction;
}

const initialState: SessionState = {
  currentUser: null,
  lastUser: null,
  isAuthenticated: false,
  isLocked: false,
  action: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,

  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.currentUser = action.payload;
      state.lastUser = action.payload;
      state.isAuthenticated = true;
      state.action = "login";
    },

    logout(state) {
      state.lastUser = state.currentUser;
      state.currentUser = null;
      state.isAuthenticated = false;
      state.isLocked = false;
      state.action = "logout";
    },

    // just lock the user
    lock(state) {
      if (state.isAuthenticated) {
        state.isLocked = true;
      }
    },
    // unvlock the user
    unlock(state) {
      state.isLocked = false;
    },
  },
});

export const { login, logout, lock, unlock } = sessionSlice.actions;
export default sessionSlice.reducer;

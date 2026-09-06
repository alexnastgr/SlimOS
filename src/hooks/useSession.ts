import { useCallback } from "react";

import { usersList } from "@/data/users";
import { useAppDispatch, useAppSelector } from "@/store/_hooks";

import { login, logout, lock, unlock } from "@/store/slices/sessionSlice";

import { initializeUserSettings } from "@/store/slices/settingSlice";

export const useSession = () => {
  const dispatch = useAppDispatch();

  const { currentUser, lastUser, isAuthenticated, isLocked, action } =
    useAppSelector((state) => state.session);

  const loginUser = useCallback(
    (username: string, password: string) => {
      const user = usersList.find(
        (user) => user.username === username && user.password === password,
      );

      if (!user) {
        return {
          success: false,
          user: null,
        };
      }

      dispatch(initializeUserSettings(user.uid));
      dispatch(login(user));

      return {
        success: true,
        user,
      };
    },
    [dispatch],
  );

  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const lockUser = useCallback(() => {
    if (!currentUser) return false;

    dispatch(lock());

    return true;
  }, [dispatch, currentUser]);

  const unlockUser = useCallback(
    (password: string) => {
      if (!currentUser || currentUser.password !== password) {
        return false;
      }

      dispatch(unlock());

      return true;
    },
    [dispatch, currentUser],
  );

  return {
    // state
    currentUser,
    lastUser,
    isAuthenticated,
    isLocked,
    action,

    // actions
    login: loginUser,
    logout: logoutUser,
    lock: lockUser,
    unlock: unlockUser,
  };
};

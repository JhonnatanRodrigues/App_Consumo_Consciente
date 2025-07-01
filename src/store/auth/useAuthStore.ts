import { create } from "zustand";
import { AuthStore } from "./authStore";

export const useAuthStore = create<AuthStore>((set) => ({
  token: undefined,
  setToken: (token) => {
    set({ token });
  },
}));
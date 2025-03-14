import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../interfaces/user";

interface UserTokenState {
  token: string;
  user: User | null;
  setUserToken: (user: User, token: string, lineToken?: string) => void;
  clear: () => void;
}

const useUserTokenStore = create(
  persist<UserTokenState>(
    (set) => ({
      token: "",
      user: null,
      setUserToken: (user: User, token: string) => {
        set({ user, token });
      },
      clear: () => {
        set({ token: "", user: null });
      },
    }),
    {
      name: "user-token-storage",
    },
  ),
);

export default useUserTokenStore;

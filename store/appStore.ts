import { create } from "zustand";

interface AppState {
  count: number;
  stargazersCount: number;
}

interface AppAction {
  reset: () => void;
  setStargazersCount: (value: number) => void;
}

type AppStore = AppState & AppAction;

const initialState: AppState = {
  count: 0,
  stargazersCount: 0,
};

export const useAppStore = create<AppStore>()((set, get) => ({
  ...initialState,
  reset: () => set(initialState),
  increaseCount: () => set((s) => ({ count: s.count + 1 })),
  setStargazersCount: (value) => set({ stargazersCount: value }),
}));

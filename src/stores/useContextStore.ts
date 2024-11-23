import { create } from "zustand";

interface ContextState {
  asset: number;
}

interface ContextAction {
  clearAsset: () => void;
  addAsset: (amount: number) => void;
}

export const useContextStore = create<ContextState & ContextAction>((set) => ({
  asset: 0,
  clearAsset: () => set({ asset: 0 }),
  addAsset: (amount: number) =>
    set(({ asset: prevAsset }) => ({ asset: prevAsset + amount })),
}));

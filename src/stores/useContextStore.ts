import { create } from "zustand";

interface ContextState {
  asset: number;
}

interface ContextAction {
  clearAsset: () => void;
  addAsset: (amount: number) => void;
}

const initialAsset = 1000;

export const useContextStore = create<ContextState & ContextAction>((set) => ({
  asset: initialAsset,
  clearAsset: () => set({ asset: initialAsset }),
  addAsset: (amount: number) =>
    set(({ asset: prevAsset }) => ({ asset: prevAsset + amount })),
}));

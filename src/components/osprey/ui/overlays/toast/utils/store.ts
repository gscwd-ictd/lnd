import { create } from "zustand";

export type ToastStore = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

export const useToastStore = create<ToastStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

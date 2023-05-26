import { create } from "zustand";
import { ModalContextState } from "./types";

export const useModalStore = create<ModalContextState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

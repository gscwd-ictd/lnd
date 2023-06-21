import { create } from "zustand";
import { TrainingType } from "../types/training";

export type TrainingNoticeStore = {
  trainingType: TrainingType | undefined;
  setTrainingType: (type: TrainingType) => void;
};

export const useTrainingNoticeStore = create<TrainingNoticeStore>((set) => ({
  trainingType: undefined,
  setTrainingType: (trainingType) => set({ trainingType }),
}));

import { create } from "zustand";
import { CourseContent, TrainingType } from "../types/training";

export type NomineeQualification = {
  tag: string;
};

export type TrainingDistribution = {
  employeeId: string;
  numberOfSlots: number;
};

export type TrainingTypesStore = {
  trainingTypes: TrainingType[];
  setTrainingTypes: (trainingTypes: TrainingType[]) => void;
};

export type SelectedTrainingTypeStore = {
  selectedTrainingType: TrainingType | undefined;
  setSelectedTrainingType: (selectedTrainingType: TrainingType) => void;
};

export type TrainingNoticeStore = {
  trainingType: string;
  setTrainingType: (trainingType: string) => void;
  trainingSource: string;
  setTrainingSource: (trainingSource: string) => void;
  lspDetails: string;
  setLspDetails: (lspDetails: string) => void;
  location: string;
  setLocation: (location: string) => void;
  courseTitle: string;
  setCourseTitle: (courseTitle: string) => void;
  facilitator: string;
  setFacilitator: (facilitator: string) => void;
  trainingStart: string;
  setTrainingStart: (trainingStart: string) => void;
  trainingEnd: string;
  setTrainingEnd: (trainingEnd: string) => void;
  numberOfHours: number;
  setNumberOfHours: (numberOfHours: number) => void;
  courseContents: CourseContent[];
  setCourseContents: (courseContent: CourseContent[]) => void;
  nomineeQualifications: NomineeQualification[];
  setNomineeQualifications: (nomineeQualifications: NomineeQualification[]) => void;
  deadlineForSubmission: string;
  setDeadlineForSubmission: (deadlineForSubmission: string) => void;
  invitationUrl?: string;
  setInvitationUrl?: (invitationUrl: string) => void;
  numberOfParticipants: number;
  setNumberOfParticipants: (numberOfParticipants: number) => void;
  trainingDistribution: TrainingDistribution[];
  setTrainingDistribution: (trainingDistribution: TrainingDistribution[]) => void;
};

export const useTrainingTypesStore = create<TrainingTypesStore>((set) => ({
  trainingTypes: [],
  setTrainingTypes: (trainingTypes) => set({ trainingTypes }),
}));

export const useSelectedTrainingType = create<SelectedTrainingTypeStore>((set) => ({
  selectedTrainingType: undefined,
  setSelectedTrainingType: (selectedTrainingType) => set({ selectedTrainingType }),
}));

export const useTrainingNoticeStore = create<TrainingNoticeStore>((set) => ({
  trainingType: "",
  setTrainingType: (trainingType) => set({ trainingType }),
  trainingSource: "",
  setTrainingSource: (trainingSource) => set({ trainingSource }),
  lspDetails: "",
  setLspDetails: (lspDetails) => set({ lspDetails }),
  location: "",
  setLocation: (location) => set({ location }),
  courseTitle: "",
  setCourseTitle: (courseTitle) => set({ courseTitle }),
  facilitator: "",
  setFacilitator: (facilitator) => set({ facilitator }),
  trainingStart: "",
  setTrainingStart: (trainingStart) => set({ trainingStart }),
  trainingEnd: "",
  setTrainingEnd: (trainingEnd) => set({ trainingEnd }),
  numberOfHours: 0,
  setNumberOfHours: (numberOfHours) => set({ numberOfHours }),
  courseContents: [],
  setCourseContents: (courseContents) => set({ courseContents }),
  nomineeQualifications: [],
  setNomineeQualifications: (nomineeQualifications) => set({ nomineeQualifications }),
  deadlineForSubmission: "",
  setDeadlineForSubmission: (deadlineForSubmission) => set({ deadlineForSubmission }),
  invitationUrl: "",
  setInvitationUrl: (invitationUrl) => set({ invitationUrl }),
  numberOfParticipants: 0,
  setNumberOfParticipants: (numberOfParticipants) => set({ numberOfParticipants }),
  trainingDistribution: [],
  setTrainingDistribution: (trainingDistribution) => set({ trainingDistribution }),
}));

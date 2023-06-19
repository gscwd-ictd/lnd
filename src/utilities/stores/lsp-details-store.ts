import { create } from "zustand";

type LspExpertise = {
  subjectMatter: string;
};

type LspEducation = {
  degree: string;
  institution: string;
};

type LspTraining = {
  name: string;
};

type LspProject = {
  name: string;
};

type LspCoaching = {
  name: string;
};

type LspAffiliation = {
  position: string;
  institution: string;
};

type LspAward = {
  name: string;
};

type LspCertification = {
  name: string;
};

export type LspDetailsStore = {
  employeeId: null | string;
  photoUrl: string;
  firstName: string;
  middleName: string;
  lastName: string;
  introduction: string;
  contactNumber: string;
  email: string;
  postalAddress: string;
  trainingSource: string;
  experience: number | null;
  expertise: LspExpertise[];
  education: LspEducation[];
  trainings: LspTraining[];
  projects: LspProject[];
  coaching: LspCoaching[];
  affiliations: LspAffiliation[];
  awards: LspAward[];
  certifications: LspCertification[];
  setEmployeeId: (employeeId: null | string) => void;
  setPhotoUrl: (photoUrl: string) => void;
  setFirstName: (firstName: string) => void;
  setMiddleName: (middleName: string) => void;
  setLastName: (lastName: string) => void;
  setIntroduction: (introduction: string) => void;
  setContactNumber: (contactNumber: string) => void;
  setEmail: (email: string) => void;
  setPostalAddress: (postalAddress: string) => void;
  setTrainingSource: (trainginSource: string) => void;
  setExperience: (experience: number) => void;
  setExpertise: (expertise: LspExpertise[]) => void;
  setEducation: (education: LspEducation[]) => void;
  setTrainings: (trainings: LspTraining[]) => void;
  setProjects: (projects: LspProject[]) => void;
  setCoaching: (coaching: LspCoaching[]) => void;
  setAffiliations: (affiliations: LspAffiliation[]) => void;
  setAwards: (awards: LspAward[]) => void;
  setCertifications: (certifications: LspCertification[]) => void;
};

export const useLspDetailsStore = create<LspDetailsStore>((set) => ({
  employeeId: null,
  photoUrl: "",
  firstName: "",
  middleName: "",
  lastName: "",
  introduction: "",
  contactNumber: "",
  email: "",
  postalAddress: "",
  trainingSource: "",
  experience: null,
  expertise: [],
  education: [],
  trainings: [],
  projects: [],
  coaching: [],
  affiliations: [],
  awards: [],
  certifications: [],
  setEmployeeId: (employeeId) => set({ employeeId }),
  setPhotoUrl: (photoUrl) => set({ photoUrl }),
  setFirstName: (firstName) => set({ firstName }),
  setMiddleName: (middleName) => set({ middleName }),
  setLastName: (lastName) => set({ lastName }),
  setIntroduction: (introduction) => set({ introduction }),
  setContactNumber: (contactNumber) => set({ contactNumber }),
  setEmail: (email) => set({ email }),
  setPostalAddress: (postalAddress) => set({ postalAddress }),
  setTrainingSource: (trainingSource) => set({ trainingSource }),
  setExperience: (experience) => set({ experience }),
  setExpertise: (expertise) => set({ expertise }),
  setEducation: (education) => set({ education }),
  setTrainings: (trainings) => set({ trainings }),
  setProjects: (projects) => set({ projects }),
  setCoaching: (coaching) => set({ coaching }),
  setAffiliations: (affiliations) => set({ affiliations }),
  setAwards: (awards) => set({ awards }),
  setCertifications: (certifications) => set({ certifications }),
}));

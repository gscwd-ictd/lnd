import { create } from "zustand";

export enum LspSourceOptions {
  INTERNAL = "Internal",
  EXTERNAL = "External",
}

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

type EmployeePds = {
  personalInfo: {
    companyId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
  };
  permanentAddress: {
    houseNumber: string;
    street: string;
    subdivision: string;
    barangay: string;
    city: string;
    province: string;
    zipCode: string;
  };
};

export type EmployeeSearchStore = {
  employeePds: EmployeePds | undefined;
  setEmployeePds: (employeePds: EmployeePds | undefined) => void;
  employeeId: string | undefined;
  setEmployeeId: (employeeId: string | undefined) => void;
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
};

export type LspType = {
  name: string;
  description?: string;
};

export type LspSource = {
  id: string;
  name: string;
};

export type LspTypeStore = {
  lspType: LspType | undefined;
  setLspType: (lspType: LspType) => void;
};

export type AddLspModalStore = {
  page: number;
  setPage: (page: number) => void;
};

export type LspSourcesStore = {
  lspSources: LspSource[];
  setLspSources: (lspSources: LspSource[]) => void;
};

export type SelectedLspSourceStore = {
  selectedLspSource: LspSource | undefined;
  setSelectedLspStore: (selectedLspSource: LspSource) => void;
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
  lspSource: string;
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
  setLspSource: (trainginSource: string) => void;
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
  lspSource: "",
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
  setLspSource: (lspSource) => set({ lspSource }),
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

export const useLspSourcesStore = create<LspSourcesStore>((set) => ({
  lspSources: [],
  setLspSources: (lspSources) => set({ lspSources }),
}));

export const useSelectedLspSource = create<SelectedLspSourceStore>((set) => ({
  selectedLspSource: undefined,
  setSelectedLspStore: (selectedLspSource) => set({ selectedLspSource }),
}));

export const useLspTypeStore = create<LspTypeStore>((set) => ({
  lspType: undefined,
  setLspType: (lspType) => set({ lspType }),
}));

export const useAddLspModalStore = create<AddLspModalStore>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}));

export const useEmployeeSearchStore = create<EmployeeSearchStore>((set) => ({
  employeeId: undefined,
  setEmployeeId: (employeeId) => set({ employeeId }),
  employeePds: undefined,
  setEmployeePds: (employeePds) => set({ employeePds }),
  searchInput: "",
  setSearchInput: (searchInput) => set({ searchInput }),
}));

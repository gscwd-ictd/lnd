export type LearningServiceProvider = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: string;
  employeeId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  postalAddress: string;
  lspSource: string;
};

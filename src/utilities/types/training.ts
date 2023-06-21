export type TrainingSource = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: string;
  name: string;
};

export type CourseContent = {
  title: string;
};

export type TrainingNotice = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: string;
  lspName: string;
  location: string;
  courseTitle: string;
  trainingStart: Date;
  trainingEnd: Date;
  numberOfHours: number;
  courseContent: Array<CourseContent>;
  nomineeQualifications: Array<string>;
  deadlineForSubmission: Date;
  invitationUrl: string;
  numberOfParticipants: number;
  status: string;
};

export type TrainingType = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: string;
  name: string;
  description?: string;
};

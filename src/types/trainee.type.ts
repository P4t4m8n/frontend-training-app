import { TProgram } from "./program.type";
import { TTrainingToTrainee } from "./training.type";
import { TUser } from "./user.type";

export type TTrainee = {
  programs?: TProgram[];
  trainings?: TTrainingToTrainee[];
  trainer?: Omit<TUser, "trainee" | "uniquePhoneId">;
  metrics?: TTraineeMetrics;
  trainerId?: string;
};

export type TraineeDto = {
  userId: string;
  trainerId?: string;
};

export type TTraineeMetrics = {
  heartRate?: number;
  weight?: number;
  height?: number;
  age?: number;
  bloodPressureSystole?: number;
  bloodPressureDiastole?: number;
  date?: Date;
  trainerId?: string;
};

export type TTraineeMetricsDto = Omit<TTraineeMetrics, "date"> & {
  traineeId: string;
};

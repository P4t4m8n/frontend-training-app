import { TEntity } from "./app.type";
import { TProgram } from "./program.type";
import { TTrainer } from "./trainer.type";
import { TTrainingToTrainee } from "./training.type";
import { TUser, TUserDto } from "./user.type";

export type TTrainee = TEntity & {
  programs?: TProgram[];
  trainings?: TTrainingToTrainee[];
  trainer?: Omit<TTrainer, "trainees" | "programs">;
  metrics?: TTraineeMetrics[];
  user: TUser;
};

export type TTraineeFilter = {
  firstName?: string;
  lastName?: string;
  email?: string;
  skip?: number;
  take?: number;
};

export type TTraineeDto = {
  userDto: TUserDto;
  trainerId?: string;
  metricsDto?: TTraineeMetricsDto;
};

export type TTraineeMetrics = TEntity & {
  heartRate?: number;
  weight?: number;
  height?: number;
  age?: number;
  bloodPressureSystole?: number;
  bloodPressureDiastole?: number;
  date?: string;
};

export type TTraineeMetricsDto = Omit<TTraineeMetrics, "date">;

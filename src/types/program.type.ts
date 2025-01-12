import { TEntity } from "./app.type";
import { TTrainingToTrainee } from "./training.type";

export type TProgram = TEntity & {
  name?: string;
  startDate?: Date;
  endDate?: Date;
  days?: TDaysOfWeek[];
  trainings?: TTrainingToTrainee[];
  isActive?: boolean;
};

export type TProgramDto = TEntity &
  Omit<TProgram, "trainings"> & {
    traineeId?: string;
    trainerId?: string;
  };

export type TProgramFilter = {
  name?: string;
  startDate?: Date;
  endDate?: Date;
  isActive?: boolean;
  traineeId?: string;
  trainerId?: string;
};

export const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export type TDaysOfWeek = (typeof DAYS_OF_WEEK)[number];

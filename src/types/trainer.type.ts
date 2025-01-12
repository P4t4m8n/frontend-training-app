import { TEntity } from "./app.type";
import { TProgram } from "./program.type";
import { TUser } from "./user.type";

export type TTrainer = TEntity & {
  trainees: Omit<TUser, "trainer" | "uniquePhoneId">[];
  programs: TProgram[];
};
export type TTrainerDto = {
  userId: string;
};

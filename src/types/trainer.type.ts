import { TProgram } from "./program.type";
import { TUser } from "./user.type";

export type TTrainer = {
    trainees: Omit<TUser, "trainer" | "uniquePhoneId">[];
    programs: TProgram[];
  };
  export type TTrainerDto = {
    userId: string;
  };
  
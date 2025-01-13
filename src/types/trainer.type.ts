import { TEntity } from "./app.type";
import { TProgram } from "./program.type";
import { TTrainee } from "./trainee.type";
import { TUser, TUserDto } from "./user.type";

export type TTrainer = TEntity & {
  trainees: TTrainee[];
  programs: TProgram[];
  user: TUser;
};
export type TTrainerDto = {
  user: TUserDto;
};

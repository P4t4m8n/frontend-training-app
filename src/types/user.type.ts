import { TEntity } from "./app.type";
import { TTrainee } from "./trainee.type";
import { TTrainer } from "./trainer.type";

export type TUser = TEntity & {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string | null;
};

export type TFullUser = TUser & {
  trainer?: TTrainer;
  trainee?: TTrainee;
};

export type TUserDto = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string | null;
};

export type TUserFilter = {
  email?: string;
  phone?: string;
};

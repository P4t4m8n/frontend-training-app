import { TEntity } from "./app.type";
import { TTrainee } from "./trainee.type";
import { TTrainer } from "./trainer.type";

export type TUser = TEntity & {
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string | null;
  trainer?: TTrainer;
  trainee?: TTrainee;
};

export type TUserDto = Omit<TUser, "trainer" | "trainee">;
export type TUserCreateDto = Omit<TUser, "id">;

export type TUserFilter = {
  email?: string;
  phone?: string;
};

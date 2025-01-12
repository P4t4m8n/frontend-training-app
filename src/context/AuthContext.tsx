import { createContext } from "react";
import { TUser } from "../types/user.type";

interface AuthProvider {
  user: TUser | null;
  getCurrentUserNoRender: () => TUser | null;
}

export const authContext = createContext<AuthProvider | undefined>(undefined);

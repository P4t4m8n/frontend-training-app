import { TFullUser } from "../types/user.type";
import { storeSessionData } from "../utils/localStorage.util";
import { apiService } from "./api.service";

async function validateToken(token: string) {
  const user = await apiService.get<TFullUser>(`auth/validate/${token}`);
  return user;
}

async function register(token: string) {
  const { uniqueId } = await apiService.get<{ uniqueId: string }>(
    `auth/registry?token=${token}`
  );

  if (!uniqueId) {
    throw new Error("Invalid token");
  }
  storeSessionData("uniqueId", uniqueId);
}
export const authService = {
  validateToken,
  register,
};

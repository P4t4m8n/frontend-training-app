import { TUserDto } from "../types/user.type";
import { apiService } from "./api.service";

async function create(formData: FormData) {
  const dto = formDataToCreateDto(formData);
  const { url } = await apiService.post<TUserDto, { url: string }>(
    "auth/create/trainee",
    dto
  );

  return url;
}

const formDataToCreateDto = (formData: FormData): TUserDto => {
  const user: TUserDto = {
    email: formData.get("email") as string,
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    phone: formData.get("phone") as string,
  };
  return user;
};

export const userService = {
  create,
  formDataToCreateDto
};

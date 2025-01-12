import { TUserCreateDto } from "../types/user.type";
import { apiService } from "./api.service";

async function create(formData: FormData) {
  const dto = formDataToCreateDto(formData);
  const magicLink = await apiService.post<TUserCreateDto, string>(
    "/users",
    dto
  );

  return magicLink;
}

const formDataToCreateDto = (formData: FormData): TUserCreateDto => {
  const user: TUserCreateDto = {
    email: formData.get("email") as string,
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    phone: formData.get("phone") as string,
    trainee: {
      metrics: {
        heartRate: +(formData.get("heartRate") || 0),
        weight: parseFloat((formData.get("weight") as string) || "0"),
        height: +(formData.get("height") || 0),
        age: +(formData.get("age") || 0),
        bloodPressureSystole: +(formData.get("bloodPressureSystole") || 0),
        bloodPressureDiastole: +(formData.get("bloodPressureDiastole") || 0),
      },
    },
  };
  return user;
};

export const userService = {
  create,
};

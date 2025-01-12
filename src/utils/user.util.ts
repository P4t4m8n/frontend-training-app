import { TUser } from "../types/user.type";

const getEmpty = (): TUser => {
  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
};

const getInputs = (user?: TUser) => {
  return [
    {
      type: "text",
      name: "id",
      readOnly: true,
      hidden: true,
      defaultValue: user?.id,
      className: "hidden",
    },

    {
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      // pattern:"[A-Za-z]{1,32}",
      defaultValue: user?.firstName,
    },
    {
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      // pattern:"[A-Za-z]{1,32}",
      defaultValue: user?.lastName,
    },

    {
      type: "email",
      name: "email",
      placeholder: "Email",
      // pattern:"[^@\s]+@[^@\s]+\.[^@\s]+",
      defaultValue: user?.email,
    },

    {
      type: "tel",
      name: "phone",
      placeholder: "Phone",
      // pattern:"[0-9]{10,11}",
      defaultValue: user?.phone || "",
    },
  ];
};

export const userUtil = {
  getEmpty,
  getInputs,
};

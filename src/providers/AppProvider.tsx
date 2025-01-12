import React, { FC } from "react";
import { AuthProvider } from "./AuthProvider";

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

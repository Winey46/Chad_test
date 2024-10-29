"use client";

import { ReactNode } from "react";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

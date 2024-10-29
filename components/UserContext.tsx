import { createContext, ReactNode, useState } from "react";

interface IUser {
  email: string;
  name: string;
  store: string | undefined;
  gmail: boolean | undefined;
  password: string;
}

interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const currentUser = { user, setUser } as IUserContext;

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

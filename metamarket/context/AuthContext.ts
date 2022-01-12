import { createContext } from "react";
import { User } from "../pages/_app";

const user: User | undefined = {
  id: 0,
  username: "",
  email: "",
  jwt: "",
};

const setUser = (user: User) => {};

interface AuthContextType {
  user: User | undefined;
  setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextType>({ user, setUser });

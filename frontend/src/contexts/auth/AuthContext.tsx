import { createContext } from "react";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
} | undefined>(undefined);

export default AuthContext;

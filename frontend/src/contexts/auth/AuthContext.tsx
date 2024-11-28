import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean,
  login: () => void,
  logout: () => void,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;

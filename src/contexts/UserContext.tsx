import { createContext } from "react";

interface UserContextType {
  name: string | null;
  isLogged: boolean;
  login: (name: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;

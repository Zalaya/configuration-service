import { createContext } from "react";

interface UserContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;

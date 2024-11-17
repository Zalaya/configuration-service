import { ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import UserContext from "../contexts/UserContext";

interface UserProviderProps {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useLocalStorage("user");

  const login = (user: string) => setUser(user);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

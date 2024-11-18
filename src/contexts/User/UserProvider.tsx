
import { ReactNode, useEffect } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";
import UserContext from "@/contexts/User/UserContext";

interface UserProviderProps {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useLocalStorage("user");

  useEffect(() => {
    if (!user) {
      setUser("Guest")
    }
  }, [user]);

  const login = (user: string) => setUser(user);
  const logout = () => setUser("Guest");

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

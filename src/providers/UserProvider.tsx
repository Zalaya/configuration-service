import { ReactNode } from "react";

import UserContext from "@/contexts/UserContext";
import useLocalStorage from "@/hooks/useLocalStorage";

interface UserProviderProps {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [name, setName] = useLocalStorage("name");

  return (
    <UserContext.Provider value={{
      name,
      isLogged: !!name,
      login: setName,
      logout: () => setName(null),
    }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider;

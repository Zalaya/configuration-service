import { PropsWithChildren, useState } from "react";

import SidebarContext from "@/contexts/Sidebar/SidebarContext";

type SidebarProviderProps = PropsWithChildren;

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const toggle = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <SidebarContext.Provider value={{ isMinimized, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

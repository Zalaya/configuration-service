import { createContext } from "react";

type SidebarContextType = {
  isMinimized: boolean;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default SidebarContext;

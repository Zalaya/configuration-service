import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Panel from "./Panel";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex flex-row p-3 bg-gray-200 gap-3">
      <Sidebar />
      <Panel>
        {children}
      </Panel>
    </div>
  );
};

export default MainLayout;
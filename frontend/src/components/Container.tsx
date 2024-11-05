import { ReactNode } from "react";

import Panel from "./Panel";
import Sidebar from "./Sidebar";

interface ContainerProps {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="h-screen bg-gray-200 p-3 flex gap-3">
      <Sidebar />
      <Panel>
        {children}
      </Panel>
    </div>
  );
};

export default Container;
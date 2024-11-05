import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
};

const Panel = ({ children }: PanelProps) => {
  return (
    <div className="h-full w-full p-3 bg-white rounded-lg">
      {children}
    </div>
  );
};

export default Panel;
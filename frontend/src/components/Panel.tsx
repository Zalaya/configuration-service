import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
}

const Panel = ({ children }: PanelProps) => {
  return (
    <div className="h-full bg-white rounded-lg w-full p-3">
      {children}
    </div>
  );
};

export default Panel;
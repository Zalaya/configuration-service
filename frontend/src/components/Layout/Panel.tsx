import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
}

const Panel = ({ children }: PanelProps) => {
  return (
    <div className="h-full w-full bg-white rounded-lg p-3">
      {children}
    </div>
  );
};

export default Panel;

import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
}

const Panel = ({ children }: PanelProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Panel;

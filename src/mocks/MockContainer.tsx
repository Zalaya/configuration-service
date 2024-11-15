import { ReactNode } from "react";

interface MockContainerProps {
  children: ReactNode;
};

const MockContainer = ({ children }: MockContainerProps) => {
  return (
    <div>
      {children}
    </div>
  )
};

export default MockContainer;


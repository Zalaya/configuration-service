import { PropsWithChildren } from "react";

type GroupProps = PropsWithChildren;

export const Group = ({ children }: GroupProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

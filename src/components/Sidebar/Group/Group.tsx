import { PropsWithChildren } from "react";

export type GroupProps = PropsWithChildren;

export const Group = ({ children }: GroupProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

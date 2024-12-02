import { PropsWithChildren } from "react";

type GroupProps = PropsWithChildren;

const Group = ({ children }: GroupProps) => {
  return (
    <div className="flex flex-col gap-1">
      {children}
    </div>
  );
};

export default Group;

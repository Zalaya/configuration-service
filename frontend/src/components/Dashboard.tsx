import { PropsWithChildren } from "react";

export type DashboardProps = PropsWithChildren;

export const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

import { PropsWithChildren } from "react";

type DashboardProps = PropsWithChildren;

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Dashboard;
import { PropsWithChildren } from "react";

type DashboardProps = PropsWithChildren;

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="bg-white h-full w-full rounded-lg p-3">
      {children}
    </div>
  );
};

export default Dashboard;

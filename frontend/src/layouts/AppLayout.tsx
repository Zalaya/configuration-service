import { Outlet } from "react-router-dom";

import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="h-screen flex gap-3 bg-gray-200 p-3">
      <Sidebar />
      <Dashboard>
        <Outlet />
      </Dashboard>
    </div>
  );
};

export default AppLayout;

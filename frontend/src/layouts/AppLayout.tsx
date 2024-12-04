import { Outlet } from "react-router-dom";

import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard>
        <Outlet />
      </Dashboard>
    </div>
  );
};

export default AppLayout;

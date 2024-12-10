import { Outlet } from "react-router-dom";

import { Dashboard } from "@/components/Dashboard.tsx";
import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";

export const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard>
        <Outlet />
      </Dashboard>
    </div>
  );
};

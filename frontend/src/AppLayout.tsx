import { Suspense } from "react";

import AppRoutes from "@/routes/AppRoutes";

import Panel from "@/components/Panel";
import Sidebar from "@/components/Sidebar/Sidebar";

import Loading from "./pages/Loading";

const AppLayout = () => {
  return (
    <div className="h-screen w-screen flex gap-3 bg-gray-200 p-3">
      <Sidebar />
      <Panel>
        <Suspense fallback={<Loading />}>
          <AppRoutes />
        </Suspense>
      </Panel>
    </div>
  );
};

export default AppLayout;

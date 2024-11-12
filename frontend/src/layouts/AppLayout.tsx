import AppRoutes from "@/routes/AppRoutes";

import Panel from "@/components/Panel";
import Sidebar from "@/components/Sidebar";

const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <Panel>
        <AppRoutes />
      </Panel>
    </div>
  );
};

export default AppLayout;

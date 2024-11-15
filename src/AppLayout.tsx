import AppRoutes from "./routes/AppRoutes";

import Panel from "./components/Layout/Panel";
import Sidebar from "./components/Layout/Sidebar";

const AppLayout = () => {
  return (
    <div className="h-screen w-screen flex gap-3 bg-gray-200 p-3">
      <Sidebar />
      <Panel>
        <AppRoutes />
      </Panel>
    </div>
  );
};

export default AppLayout;

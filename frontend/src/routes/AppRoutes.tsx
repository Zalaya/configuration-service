import { Routes, Route } from "react-router-dom"

import Modules from "@/pages/Modules";
import Properties from "@/pages/Properties";
import Settings from "@/pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/modules" element={<Modules />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;

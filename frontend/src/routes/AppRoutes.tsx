import { Routes, Route } from "react-router-dom"

import Modules from "@/pages/Modules";
import Properties from "@/pages/Properties";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/modules" element={<Modules />} />
      <Route path="/properties" element={<Properties />} />
    </Routes>
  );
};

export default AppRoutes;

import { Routes, Route } from "react-router-dom"

import Properties from "@/pages/Modules";
import Modules from "@/pages/Modules";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/modules" element={<Modules />} />
      <Route path="/properties" element={<Properties />} />
    </Routes>
  );
};

export default AppRoutes;

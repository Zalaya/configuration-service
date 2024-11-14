import { Routes, Route } from "react-router-dom"
import { lazy } from "react";

const Modules = lazy(() => import("@/pages/Modules"));
const Properties = lazy(() => import("@/pages/Properties"));
const Settings = lazy(() => import("@/pages/Settings"));

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

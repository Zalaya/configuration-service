import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "@/pages/Loading";
import { loadWithDelay } from "@/utils/loadWithDelay";

const Modules = lazy(() => loadWithDelay(() => import("@/pages/Modules"), 2000));
const Properties = lazy(() => loadWithDelay(() => import("@/pages/Properties"), 2000));
const Settings = lazy(() => loadWithDelay(() => import("@/pages/Settings"), 2000));

const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/modules" element={<Modules />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

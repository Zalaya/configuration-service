import { ReactNode, Suspense } from "react";
import { Route } from "react-router-dom";

interface LazyRouteProps {
  path: string;
  element: ReactNode;
  fallback: ReactNode;
};

const LazyRoute = ({ path, element, fallback }: LazyRouteProps) => {
  return (
    <Route path={path} element={
      <Suspense fallback={fallback}>
        {element}
      </Suspense>
    } />
  );
};

export default LazyRoute;

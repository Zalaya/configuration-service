import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "@/contexts/auth/useAuth";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : (
    <Navigate to="/auth/login" replace />
  );
};

export default ProtectedRoute;

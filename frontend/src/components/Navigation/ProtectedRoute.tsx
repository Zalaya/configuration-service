import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "@/contexts/auth/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : (
    <Navigate to="/auth/login" replace />
  );
};

export default ProtectedRoute;

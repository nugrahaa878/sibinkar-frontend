import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoutes;

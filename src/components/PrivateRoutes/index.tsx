import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // TO DO: Setup logic authentication
  const isLoggedIn = false;

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoutes;

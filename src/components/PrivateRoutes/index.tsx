import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // TO DO: Setup logic authentication
  const isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoutes;

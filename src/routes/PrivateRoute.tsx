import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { pathname } = useLocation();
  const accessToken = localStorage.getItem("access_token");

  if (pathname === "/") {
    return <Outlet />;
  }

  if (pathname === "/todo") {
    return accessToken ? <Outlet /> : <Navigate to="/signin" replace />;
  }

  return accessToken ? <Navigate to="/todo" replace /> : <Outlet />;
};

export default PrivateRoute;

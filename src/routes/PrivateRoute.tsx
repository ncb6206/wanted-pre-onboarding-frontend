import AccessTokenContext from "contexts/AccessTokenContext";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { pathname } = useLocation();
  const { accessToken } = useContext(AccessTokenContext);

  if (pathname === "/") {
    return <Outlet />;
  }

  if (pathname === "/todo") {
    return accessToken ? <Outlet /> : <Navigate to="/signin" replace />;
  }

  return accessToken ? <Navigate to="/todo" replace /> : <Outlet />;
};

export default PrivateRoute;

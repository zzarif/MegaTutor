import { Outlet, Navigate } from "react-router-dom";
import { urls } from "../../constants/urls";

function PrivateRoutes() {
  // return localStorage.getItem("auth-megatutor") ? <Outlet /> : <Navigate to={urls.LANDING_PAGE} />;
  return true ? <Outlet /> : <Navigate to={urls.LANDING_PAGE} />;
}

export default PrivateRoutes;

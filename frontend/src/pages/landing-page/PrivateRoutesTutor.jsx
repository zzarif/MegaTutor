import { Outlet, Navigate } from "react-router-dom";
import { urls } from "../../constants/urls";

function PrivateRoutesTutor() {
  return localStorage.getItem("auth-tutor") ? <Outlet /> : <Navigate to={urls.LANDING_PAGE} />;
}

export default PrivateRoutesTutor;

import { Outlet, Navigate } from "react-router-dom";
import { urls } from "../../constants/urls";

function PrivateRoutesAdmin() {
  return localStorage.getItem("auth-admin") ? <Outlet /> : <Navigate to={urls.LANDING_PAGE} />;
}

export default PrivateRoutesAdmin;

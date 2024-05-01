import { Outlet, Navigate } from "react-router-dom";
import { urls } from "../../constants/urls";

function PrivateRoutesParent() {
  return localStorage.getItem("auth-parent") ? <Outlet /> : <Navigate to={urls.LANDING_PAGE} />;
}

export default PrivateRoutesParent;

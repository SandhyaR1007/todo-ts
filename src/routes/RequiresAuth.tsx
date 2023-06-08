import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const RequiresAuth = () => {
  const { token } = useAuthContext();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default RequiresAuth;

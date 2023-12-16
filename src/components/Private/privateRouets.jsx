import { Navigate, Outlet } from "react-router-dom";

const PrivateRouets = () => {
  const token = localStorage.getItem("admin_token");

  // let auth = { token: true };

  return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRouets;

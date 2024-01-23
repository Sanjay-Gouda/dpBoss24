import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const PrivateRouets = () => {
  // const token = localStorage.getItem("admin_token");
  const token = true;

  // let auth = { token: true };

  return (
    <>
      {token ? (
        <div className="flex w-full  flex-row h-[calc(100%-56px)] ">
          <div className="w-[20%]">
            <Sidebar />
          </div>
          <div className="w-[70%] flex justify-center">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default PrivateRouets;

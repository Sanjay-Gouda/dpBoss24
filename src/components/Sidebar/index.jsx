import { useLocation, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiUploadCloudFill } from "react-icons/ri";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const isAdmin = location.pathname === "/admin";
  const isUpload = location.pathname === "/upload";
  console.log(isAdmin, isUpload);
  return (
    <>
      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <ul className="space-y-2  font-medium">
            <li
              onClick={() => navigate("/admin")}
              className={`flex items-center cursor-pointer p-4 text-gray-900 rounded-lg  hover:bg-gray-300 group ${
                isAdmin ? "bg-gray-300" : ""
              }`}
            >
              <MdDashboard size={20} />
              <span className="ms-3">Dashboard</span>
            </li>
            <li
              onClick={() => navigate("/upload")}
              className={`flex items-center cursor-pointer p-4 text-gray-900 rounded-lg  hover:bg-gray-300 group ${
                isUpload ? "bg-gray-300" : ""
              }`}
            >
              <RiUploadCloudFill size={20} />
              <span className="ms-3">Upload Video</span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

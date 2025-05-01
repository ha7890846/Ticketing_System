import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "140px", padding: "10px", width: "100%" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;

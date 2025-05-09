import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "120px", paddingLeft: "10px", width: "100%",backgroundColor:"#fff",height:"100vh" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;

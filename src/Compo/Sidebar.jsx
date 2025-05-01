import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BsCloudHaze2, BsChatRightText } from "react-icons/bs";
import { RiRobot3Line, RiTeamFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import "../styling/sidebar.css"; // Assuming you want to move inline styles

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <BsCloudHaze2 size={65} />
      </div>
      <nav className="nav">
        <NavLink to="/dashboard" className="nav-link">
          <GoHome size={25} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          <BsChatRightText size={25} />
          <span>Contact Center</span>
        </NavLink>
        <NavLink to="/analytics" className="nav-link">
          <IoIosStats size={25} />
          <span>Analytics</span>
        </NavLink>
        <NavLink to="/chatbot" className="nav-link">
          <RiRobot3Line size={25} />
          <span>Chatbot</span>
        </NavLink>
        <NavLink to="/team" className="nav-link">
          <RiTeamFill size={25} />
          <span>Team</span>
        </NavLink>
        <NavLink to="/settings" className="nav-link">
          <IoSettingsOutline size={25} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;

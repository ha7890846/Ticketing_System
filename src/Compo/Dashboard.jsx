import Sidebar from "./Sidebar";
import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IoIosMailUnread } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
const Dashboard = () => {
  
  return (
    <>
      <div style={{ display: "flex" }}>
        <section style={{ width: "85%",marginLeft:"15%" }}>
          <h1>Dashboard</h1>
          <div
            style={{
              display: "inline-flex",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "5px",
              alignItems: "center",
            }}
          >
            <RiSearchLine />
            <input
              type="text"
              placeholder="Search for Issue"
              style={{
                backgroundColor: "whitesmoke",
                border: "none",
                padding: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <div style={{ display: "inherit", width: "85%" }}>
            <nav style={{ display: "flex" }}>
              <IoIosMailUnread />
              <NavLink to="/all-ticket">All Ticket</NavLink>
              <MdOutlineMarkEmailRead />
              <NavLink to="/resolved-ticket">Resolved</NavLink>
              <IoMailOpenOutline />
              <NavLink to="/unresolved-ticket">Unresolved</NavLink>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};
export default Dashboard;

import { RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IoIosMailUnread } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import style from "../styling/dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <div className={style.main}>
        <section className={style.header}>
          <h1>Dashboard</h1>
          <div className={style.searchBox}>
            <RiSearchLine />
            <input type="text" placeholder="Search for Ticket" />
          </div>
          <div className={style.tickets}>
            <nav>
              <IoIosMailUnread />
              <NavLink
                to="/all-ticket"
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
              >
                <span>All Tickets</span>
              </NavLink>
              <MdOutlineMarkEmailRead />
              <NavLink
                to="/resolved-ticket"
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
              >
                <span>Resolved</span>
              </NavLink>
              <IoMailOpenOutline />
              <NavLink
                to="/unresolved-ticket"
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
              >
                <span>Unresolved</span>
              </NavLink>
            </nav>
            <div style={{ border: "1px solid rgb(224, 235, 245)" }}></div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Dashboard;

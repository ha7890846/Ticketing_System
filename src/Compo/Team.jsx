import { NavLink,Link } from "react-router-dom";
import avatar from "../assets/avatar-1.png";
import { IoAddCircleOutline } from "react-icons/io5";
import AddTeamMember from "./AddTeamMember";
const Team = () => {
  const data = {
    name: "khabib",
    mob: "28344234",
    mail: "abc@xyz.com",
    role: "admin",
  };
  return (
    <>
      <section style={{ width: "85%", marginLeft: "10%" }}>
        <h1 style={{ color: "6A6B70" }}>Team</h1>
        <div style={{ border: "1px solid black", margin: "0" }}></div>
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "15%" }}
        >
          <h3 style={{ margin: "2px 80px 2px 10px" }}>Full Name</h3>
          <h3 style={{ margin: "2px 80px 2px 10px" }}>Phone</h3>
          <h3 style={{ margin: "2px 80px 2px 10px" }}>Email</h3>
          <h3 style={{ margin: "2px 80px 2px 10px" }}>Role</h3>
        </div>
        <div style={{ border: "1px solid black", margin: "0" }}></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ border: "1px solid black", display: "flex" }}>
            <img
              src={avatar}
              alt="pic"
              height={"40px"}
              width={"40px"}
              style={{ marginRight: "15%" }}
            />
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.name}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mob}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mail}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.role}</h3>
          </div>
          <div style={{ border: "1px solid black", display: "flex" }}>
            <img
              src={avatar}
              alt="pic"
              height={"40px"}
              width={"40px"}
              style={{ marginRight: "15%" }}
            />
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.name}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mob}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mail}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.role}</h3>
          </div>
          <div style={{ border: "1px solid black", display: "flex" }}>
            <img
              src={avatar}
              alt="pic"
              height={"40px"}
              width={"40px"}
              style={{ marginRight: "15%" }}
            />
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.name}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mob}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mail}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.role}</h3>
          </div>
          <div style={{ border: "1px solid black", display: "flex" }}>
            <img
              src={avatar}
              alt="pic"
              height={"40px"}
              width={"40px"}
              style={{ marginRight: "15%" }}
            />
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.name}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mob}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mail}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.role}</h3>
          </div>
          <div style={{ border: "1px solid black", display: "flex" }}>
            <img
              src={avatar}
              alt="pic"
              height={"40px"}
              width={"40px"}
              style={{ marginRight: "15%" }}
            />
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.name}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mob}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.mail}</h3>
            <h3 style={{ margin: "2px 80px 2px 10px" }}>{data.role}</h3>
          </div>
        </div>
        <div style={{ marginTop: "5px" }}>
          <Link to="/add-member">
            <button
              style={{
                backgroundColor: "lightblue",
                position: "absolute",
                right: "80px",
                padding: "10px",
                fontSize: "20px",
              }}
            >
              <IoAddCircleOutline />
              Add more member
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Team;

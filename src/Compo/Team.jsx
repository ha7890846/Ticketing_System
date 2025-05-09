import { Link } from "react-router-dom";
import avatar from "../assets/avatar-1.png";
import { IoAddCircleOutline } from "react-icons/io5";
import style from "../styling/team.module.css";
const Team = () => {
  const data = [
    {
      name: "khabib",
      mob: "28344234",
      mail: "abc@xyz.com",
      role: "admin",
    },
  ];
  const tableList = [];
  for (let i = 0; i < 5; i++) {
    tableList.push(
      <tr className={style.tableRow}>
        <td>
          <img src={avatar} alt="" width={"50px"} height={"50px"} />
        </td>
        <td>{data[0].name}</td>
        <td>{data[0].mob}</td>
        <td>{data[0].mail}</td>
        <td>{data[0].role}</td>
      </tr>
    );
  }
  return (
    <>
      <section className={style.main}>
        <div className={style.title}>
          <h1>Team</h1>
        </div>
        {/* tableList of Team Member */}
        <div
          style={{
            borderTop: "1px solid #E2E8F0",
            borderBottom: "1px solid #E2E8F0",
          }}
        ></div>
        <div className={style.tableHead}>
          <h4>Profile</h4>
          <h4>Full Name</h4>
          <h4>Phone</h4>
          <h4>Email</h4>
          <h4>Role</h4>
        </div>
        <div
          style={{
            borderTop: "1px solid #E2E8F0",
            borderBottom: "1px solid #E2E8F0",
          }}
        ></div>
        <div>{tableList}</div>
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

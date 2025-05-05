import { NavLink } from "react-router-dom";
import styles from "../styling/homepage.module.css";
import { BsCloudHaze2 } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header>
        <div className={styles.logoArea}>
          <BsCloudHaze2 className={styles.logo} size={"65px"} />
          <h1 className={styles.title}>Hubly</h1>
        </div>
        <div className={styles.loginArea}>
          <NavLink to="/login">
            <button className={styles.loginBttn}>Login</button>
          </NavLink>
          <NavLink to="/signup">

          <button className={styles.signBttn}>Sign Up</button>
          </NavLink>
        </div>
      </header>
    </>
  );
};
export default Header;

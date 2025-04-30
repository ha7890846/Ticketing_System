import { BsCloudHaze2 } from "react-icons/bs";
import frame from "../assets/Frame.png";
import style from "../styling/registration.module.css";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <section className={style.leftContainer}>
          <div className={style.logo}>
            <BsCloudHaze2 size={"60px"} />
            <h1>Hubly</h1>
          </div>
          <div className={style.content}>
            <h1 className={style.title}>Sign in to Your Plexify</h1>
            <form action="">
              <label htmlFor="username">Username</label>
              <input type="email" />
              <label htmlFor="password">Password</label>
              <input type="text" />
              <button>Log in</button>
            </form>
            <Link to="/signup">Forget Password?</Link>
            <div className={style.newAcc}>
              <p>Don't have an Account? </p>
              <Link to="/signup">SignUp</Link>
            </div>
            <p className={style.policy}>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply
            </p>
          </div>
        </section>
        <section className={style.rightContainer}>
          <img src={frame} alt="pic" />
        </section>
      </div>
    </>
  );
};
export default SignIn;

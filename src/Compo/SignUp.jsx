import style from "../styling/registration.module.css";
import frame from "../assets/Frame.png";
import { BsCloudHaze2 } from "react-icons/bs";
const SignUp = () => {
  return (
    <div className={style.mainContainer}>
      <section className={style.leftContainer}>
        <div className={style.logo}>
          <BsCloudHaze2 size={"60px"} />
          <h1>Hubly</h1>
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Create an Account</h1>
          <form action="">
            <label htmlFor="fname">First Name:</label>
            <input type="text" name="" id="" />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name="" id="" />
            <label htmlFor="email">Email</label>
            <input type="text" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="" id="" />
            <label htmlFor="">Confirm Password:</label>
            <input type="password" name="" id="" />
            {/* <div className={style.terms}>
              <input type="checkbox"/>
              <p style={{margin:"0"}}>
                By creating an account, I agree to our Terms of use and Privacy
                Policy{" "}
              </p>
            </div> */}
            <button>Sign Up</button>
          </form>
          <p className={style.policy}>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply
          </p>
        </div>
      </section>
      <section className={style.leftContainer}>
        <img src={frame} alt="pic" />
      </section>
    </div>
  );
};
export default SignUp;

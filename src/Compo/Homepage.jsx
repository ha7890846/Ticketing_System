import graph from "../assets/sales-chart.png";
import userCard from "../assets/Card-1.png";
import group from "../assets/Group.png";
import style from "../styling/homepage.module.css";
import Footer from "./Footer";
import Header from "./Header";
import { FaArrowRight } from "react-icons/fa";
import { RiPlayCircleLine } from "react-icons/ri";
import company1 from "../assets/Company1.png";
import company2 from "../assets/Company2.png";
import company3 from "../assets/Company3.png";
import company4 from "../assets/Company4.png";
import company5 from "../assets/Company5.png";
import company6 from "../assets/Company5.png";
import platform from "../assets/platform.png";
import icons from "../assets/platform2.png";
import RaiseIssuePopup from "./RaiseIssuePopup";
import { FaCheck } from "react-icons/fa";
const Homepage = () => {
  const starter = 300;
  const grow = 900;
  const growList = [
    "unlimited Users",
    "GMB Messaging",
    "Reputation Management",
    "GMB Call Tracking",
    "24/7 Award Winning Support",
  ];
  const starterList = [
    "Pipeline Management",
    "Marketing Automation Campaigns",
    "Live Call Transfer",
    "GMB Messaging",
    "Embeded-able Form Builder",
    "Reputation Management",
    "24/7 Award Winning Support",
  ];
  return (
    <div className={style.main}>
      <Header />
      <section className={style.first}>
        <div className={style.textContent}>
          <h1 className={style.heading}>Grow Your Business Faster</h1>
          <h1 className={style.heading}>with Hubly CRM</h1>
          <p className={style.paragraph}>
            Manage leads, automate workflows, and close deals effortlessly—all
            in one powerful <br className={style.lineBreak} />
            platform.
          </p>
          <div className={style.guideBttn}>
            <button className={style.getBttn}>
              Get Started <FaArrowRight />
            </button>
            <RiPlayCircleLine size={40} className={style.playIcon} />
            <button className={style.playBttn}>Watch video</button>
          </div>
        </div>
        <div className={style.picContent}>
          <img src={userCard} alt="" className={style.userCard} />
          <img src={group} alt="" className={style.busi} />
          <img src={graph} alt="" className={style.grph} />
        </div>
      </section>
      <section>
        <div className={style.company}>
          <img src={company1} alt="Company 1" />
          <img src={company2} alt="Company 2" />
          <img src={company3} alt="Company 3" />
          <img src={company4} alt="Company 4" />
          <img src={company5} alt="Company 5" />
          <img src={company6} alt="Company 6" />
        </div>
        <div className={style.aboutWrapper}>
          <div className={style.about}>
            <div className={style.aboutHeading}>
              <h1>At its core, Hubly is a robust CRM</h1>
              <h1>solution.</h1>
            </div>
            <p className={style.paragraph}>
              Hubly helps businesses streamline customer interactions, track
              leads, and automate tasks—saving you time and maximizing revenue.
              Whether you’re a startup or an enterprise, Hubly adapts to your
              needs, giving you the tools to scale efficiently.
            </p>
          </div>
        </div>
        <div className={style.platformContainer}>
          <div className={style.platforms}>
            <div className={style.platformText}>
              <h1>MULTIPLE PLATFORMS TOGETHER!</h1>
              <p>
                Email communication is a breeze with our fully integrated, drag
                & drop email builder.
              </p>
              <h1>Close</h1>
              <p>
                Capture leads using our landing pages, surveys, forms,
                calendars, inbound phone system & more!
              </p>
              <h1>NURTURE</h1>
              <p>
                Capture leads using our landing pages, surveys, forms,
                calendars, inbound phone system & more!
              </p>
            </div>
            <div className={style.platformPic}>
              <img src={icons} alt="" className={style.icons} />
              <img src={platform} alt="Platforms" className={style.stackPic} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={style.aboutWrapper}>
          <div className={style.about}>
            <div className={style.aboutHeading}>
              <h1>We have plans for everyone!</h1>
            </div>
            <p className={style.paragraph}>
              We started with a strong foundation, then simply built all of the
              sales and marketing tools ALL businesses need under one platform.
            </p>
          </div>
        </div>
        <div className={style.plans}>
          <div className={style.planCard}>
            <h1>Starter</h1>
            <p>
              Best for local businesses needing to improve their online
              reputation.
            </p>
            <div className={style.priceBlock}>
              <h1 className={style.price}>${starter}</h1>
              <p>/Monthly</p>
            </div>
            <h3>What's includes:</h3>
            {/* Listing the features */}
            {growList.map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center" }}>
                <FaCheck
                  style={{
                    color: "green",
                    marginRight: "10px",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "lightblue",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                />
                {item}
              </li>
            ))}
            <button className={style.signupBtn}>
              Sign up for Registration
            </button>
          </div>
          <div className={style.planCard}>
            <h1>Grow</h1>
            <p>
              Best for all businesses that want to take full control of their
              marketing automation and track their leads, click to close.
            </p>
            <div className={style.priceBlock}>
              <h1 className={style.price}>${grow}</h1>
              <p>/Monthly</p>
            </div>
            <h3>What's includes:</h3>
            <div style={{marginBottom:"25px"}}>
              {starterList.map((item, index) => (
                <li
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaCheck
                    style={{
                      color: "green",
                      marginRight: "10px",
                      width: "15px",
                      height: "15px",
                      backgroundColor: "lightblue",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                  />
                  {item}
                </li>
              ))}
            </div>
            <button className={style.signupBtn}>
              Sign up for Registration
            </button>
          </div>
        </div>
        <RaiseIssuePopup />
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;

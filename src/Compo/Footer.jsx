import { BsCloudHaze2 } from "react-icons/bs";
import style from "../styling/footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.logo}>
          <BsCloudHaze2 id="logo" size={"50px"} />
          <h1 id="title">Hubly</h1>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
        >
          <div>
            <h3>Product</h3>
            <li>Universal checkout</li>
            <li>Payment Workflows</li>
            <li>Observability</li>
            <li>UpliftAI</li>
            <li>Apps & Integrations</li>
          </div>
          <div>
            <h3>Resources</h3>
            <li>Blog</li>
            <li>Succes Stories</li>
            <li>News Room</li>
            <li>Terms</li>
            <li>Privacy</li>
          </div>
        </div>
        <div style={{ margin: "30px" }}>
          <div>
            <h3>Why Primer</h3>
            <li>Expand to new markets</li>
            <li>Boost Payment success</li>
            <li>Improve conversion rates</li>
            <li>Reduce payment fraud</li>
            <li>Recover revenue</li>
          </div>
          <div>
            <h3>Company</h3>
            <li>Careers</li>
          </div>
        </div>
        <div style={{ margin: "30px" }}>
          <div>
            <h3>Developers</h3>
            <li>Primer Docs</li>
            <li>API Reference</li>
            <li>Payment methods guide</li>
            <li>Service status</li>
            <li>Community</li>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

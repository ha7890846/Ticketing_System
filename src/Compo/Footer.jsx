import { BsCloudHaze2 } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{display:"flex",margin:"10px",padding:"10px"}}>
          <BsCloudHaze2 id="logo" size={"50px"} />
          <h1 id="title">Hubly</h1>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
        >
          <h1>Heading</h1>
          <li>contact us</li>
          <li>site Reliablity</li>
          <li>support</li>
        </div>
        <div style={{ margin: "30px" }}>
          <h1>Heading</h1>
          <li>contact us</li>
          <li>site Reliablity</li>
          <li>support</li>
        </div>
        <div style={{ margin: "30px" }}>
          <h1>Heading</h1>
          <li>contact us</li>
          <li>site Reliablity</li>
          <li>support</li>
        </div>
      </div>
    </>
  );
};
export default Footer;

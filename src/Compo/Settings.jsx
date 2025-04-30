import { GrUserSettings } from "react-icons/gr";
const Settings = () => {
  return (
    <>
      <div>
        <h1>
          <GrUserSettings />
          Profile Settings
        </h1>
        <h4>Edit Profile</h4>
        <div style={{ border: "1px solid black", margin: "0" }}></div>
        <div>
          <form action="">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="" id="" />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="" />
            <label htmlFor="mail">Email:</label>
            <input type="text" name="" id="" />
            <label htmlFor="password">Password :</label>
            <input type="password" name="" id="" />
            <label htmlFor="password">Confirm Password :</label>
            <input type="password" name="" id="" />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Settings;

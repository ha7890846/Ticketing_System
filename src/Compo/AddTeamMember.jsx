const AddTeamMember = () => {
  return (
    <section>
      <div style={{position: "relative",
        width: "400px",
        height: "250px",
        backgroundColor: "#ffffff",
        padding: "30px",
        border:"1px solid black",
        borderRadius: "10px"}}>
        <h1>Add Team Member</h1>
        <p>Talk with colleagues in a group chat. Messages in this group are only visible to it's participants. New teammates may only be invited by the administrators.</p>
        <label htmlFor="username">Username:</label>
        <input type="text" name="" id="" placeholder="Enter username."/>
        <label htmlFor="">Email:</label>
        <input type="text" name="" id="" placeholder="Enter email." />
        <label htmlFor="mob">Mobile:</label>
        <input type="text" name="" id="" placeholder="Enter Mobile Number."/>
        <label htmlFor="role">Role:</label>
        <select name="" id="">
            <option value="">Sr. Engineer</option>
            <option value="">Jr. Engineer</option>
            <option value="">Manager</option>
            <option value="">Developer</option>
        </select>
        <div style={{display:"flex",position:"relative",left:"30px"}}>
        <button>Cancel</button>
        <button>Save</button>
        </div>
      </div>
    </section>
  );
};
export default AddTeamMember;

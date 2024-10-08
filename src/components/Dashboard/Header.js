import Logout from "../Logout";

const Header = () => {
  return (
    <header>
      <h1>Employee Management System</h1>
      <div style={{ marginTop: "18px", marginBottom: "18px" }}>
        <button className="button">Add Employee</button>
        <Logout />
      </div>
    </header>
  );
};

export default Header;

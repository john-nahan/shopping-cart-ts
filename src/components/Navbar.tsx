import Button from "./Button";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="left-panel">
        <Button onClick={() => alert("Go to home page!")}>Logo</Button>
      </div>
      <div className="right-panel">
        <Button onClick={() => alert("Go to home page!")}>Home</Button>
        <Button onClick={() => alert("Go to about page!")}>About</Button>
        <Button onClick={() => alert("Go to user details page!")}>User</Button>
      </div>
    </div>
  );
};

export default Navbar;

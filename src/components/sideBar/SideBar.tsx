import "./sideBar.css";
const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <img src="/pr-logo.svg" />
      <nav>
        <div className="sideBarStroke" />
        <img src="/substract-icon.svg" className="active" />
        <img src="/profile-icon.svg" />
        <div className="sideBarStroke" />
      </nav>
      <div className="contentWrapper">
        <img src="/settings-icon.svg" />
        <div className="sideBarStroke" />
        <img
          src="/fake-head.jpeg"
          style={{ width: "50px", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default SideBar;

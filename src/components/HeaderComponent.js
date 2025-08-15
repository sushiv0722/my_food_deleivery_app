//Header component
import head_img from "../../utils/links";

const HeaderComponent = () => {
  return (
    <div id="header-container">
      <img className="head-logo" alt="app-logo" src={head_img}></img>
      <div id="nav-container">
        <ul id="nav-list">
          <li>About Us</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;

//Header component
import { useState } from "react";
import { head_img } from "../../utils/links";
import { useState } from "react";

const HeaderComponent = () => {
  const [btn_text, setbtn_text] = useState("Login");
  return (
    <div id="header-container">
      <img className="head-logo" alt="app-logo" src={head_img}></img>
      <div id="nav-container">
        <ul id="nav-list">
          <li>About Us</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
          <button
            className="body_btn"
            onClick={() => {
              btn_text === "Login"
                ? setbtn_text("Log out ")
                : setbtn_text("Login ");
            }}
          >
            {btn_text}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;

import { useState } from "react";
import twiggitoLogo from "../assets/twiggitoLogo.png";

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={twiggitoLogo} alt="twiggito logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

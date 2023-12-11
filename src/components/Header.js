import { useState } from "react";
import twiggitoLogo from "../assets/twiggitoLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={twiggitoLogo} alt="twiggito logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
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

import { useState } from "react";
import twiggitoLogo from "../assets/twiggitoLogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={twiggitoLogo} alt="twiggito logo" />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "✅" : "🔴"} </li>
          <li>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/grocery"
            >
              Grocery
            </Link>
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

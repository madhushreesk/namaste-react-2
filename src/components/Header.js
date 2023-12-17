import { useContext, useState } from "react";
import twiggitoLogo from "../assets/twiggitoLogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  // subscribing to a store using a selector

  const cart = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center p-15 bg-white shadow-md transition-shadow duration-300 ease-linear hover:shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="m-10 w-52" src={twiggitoLogo} alt="twiggito logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex p-5 m-4">
          <li className="px-3">
            Online Status : {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="px-3">
            <Link style={{ textDecoration: "none", color: "#000" }} to="/">
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link style={{ textDecoration: "none", color: "#000" }} to="/about">
              About Us
            </Link>
          </li>
          <li className="px-3">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li className="px-3">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li className="px-3 font-bold text-xl">Cart ({cart.length} items)</li>
          <button
            className="login-button"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

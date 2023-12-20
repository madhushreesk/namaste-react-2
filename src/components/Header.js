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
        <Link to="/home">
          <img className="m-10 w-52" src={twiggitoLogo} alt="twiggito logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex p-5 m-4">
          <li className="px-3 text-xl">
            Online Status : {onlineStatus ? "🛜" : "🔴"}
          </li>
          <li className="px-3">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              className="text-xl text-black"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link
              style={{ textDecoration: "none" }}
              className="text-xl text-black"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li className="px-3">
            <Link
              className="text-xl text-black"
              style={{ textDecoration: "none", color: "#000" }}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>

          <Link to="/cart">
            <li className="px-4 font-bold text-xl">Cart ({cart.length})</li>
          </Link>

          <Link to="/">
            <button className="bg-red-500 text-white text-lg flex justify-between px-3 py-2 rounded-lg hover:bg-red-600">
              Logout
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

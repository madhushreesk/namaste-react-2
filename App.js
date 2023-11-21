import React from "react";
import ReactDOM from "react-dom/client";
import twiggitoLogo from "./assets/twiggitoLogo.png";

// component breakdown
// Header component
// - logo component, nav bar component
// Body component
// - search
// - RestaurantContainer
// -- resCard
// Footer component
// - copyright, address, links

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

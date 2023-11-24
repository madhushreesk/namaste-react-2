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
//    --Img
//    --Name of res, star rating, cuisine
// Footer component
// - copyright, address, links

// const swiggy_api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

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

const RestaurantCard = ({ resName, cuisine, star, eta }) => {
  console.log(resName);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6699%2C4476&q=45&auto=format&w=926&fit=clip"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{star}</h4>
      <h4>{eta}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName={"Meghanas food"}
          cuisine={"Biriyani, North Indian"}
          eta={"38mins"}
          star={"4.4"}
        />
        <RestaurantCard
          resName={"KFC"}
          cuisine={"Burger, Biriyani"}
          eta={"48mins"}
          star={"4.5"}
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

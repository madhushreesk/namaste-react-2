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

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData);

  const cuisineList = resData?.cuisines.map((cuisine, index) => (
    <h4 key={index}>{cuisine}</h4>
  ));
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6699%2C4476&q=45&auto=format&w=926&fit=clip"
        alt="res-logo"
      />
      <h3>{resData?.name}</h3>
      <h4>{resData?.sla?.deliveryTime}</h4>
      <div className="cuisine-list">{cuisineList}</div>
      <h4>{resData?.avgRating}</h4>
      <h4>{resData?.costForTwo}</h4>
    </div>
  );
};

const resObj = {
  id: "241027",
  name: "Namaste",
  cloudinaryImageId: "dtcwa1rxdskp3crqvpr3",
  locality: "3rd Sector",
  areaName: "Hsr Layout",
  costForTwo: "₹100 for two",
  cuisines: [
    "South Indian",
    "Thalis",
    "Biryani",
    "Desserts",
    "Beverages",
    "Indian",
  ],
  avgRating: 4.1,
  veg: true,
  feeDetails: {
    restaurantId: "241027",
    fees: [
      {
        name: "BASE_DISTANCE",
        fee: 4200,
      },
      {
        name: "BASE_TIME",
      },
      {
        name: "ANCILLARY_SURGE_FEE",
      },
    ],
    totalFee: 4200,
  },
  parentId: "366271",
  avgRatingString: "4.1",
  totalRatingsString: "10K+",
  sla: {
    deliveryTime: 53,
    lastMileTravel: 4.2,
    serviceability: "SERVICEABLE",
    slaString: "53 mins",
    lastMileTravelString: "4.2 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2023-11-24 01:00:00",
    opened: true,
  },
  badges: {
    imageBadges: [
      {
        imageId: "v1695133679/badges/Pure_Veg111.png",
        description: "pureveg",
      },
    ],
  },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {
        badgeObject: [
          {
            attributes: {
              description: "pureveg",
              imageId: "v1695133679/badges/Pure_Veg111.png",
            },
          },
        ],
      },
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "₹125 OFF",
    subHeader: "ABOVE ₹249",
    discountTag: "FLAT DEAL",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
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

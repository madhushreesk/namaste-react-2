import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  const TopRated = () => {
    const topRatedRestaurants = listOfRestaurant.filter(
      (res) => res.avgRating > 4
    );
    setListOfRestaurant(topRatedRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => TopRated()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((resData) => (
          <RestaurantCard key={resData.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;

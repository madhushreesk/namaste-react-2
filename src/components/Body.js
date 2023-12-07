import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  const TopRated = () => {
    const topRatedRestaurants = listOfRestaurant.filter(
      (res) => res.avgRating > 4
    );
    setListOfRestaurant(topRatedRestaurants);
  };

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
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

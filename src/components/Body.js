import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // whenever state variable changes, react triggers a reconciliation cycle(re-renders the component)
  const [originalListOfRestaurant, setOriginalListOfRestaurant] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const TopRated = () => {
    const topRatedRestaurants = originalListOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(topRatedRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_API);

    const json = await data.json();
    const restaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setOriginalListOfRestaurant(restaurants);
    setListOfRestaurant(restaurants);

    // console.log("Res data", restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="p-3">
          <input
            className="search-box"
            type="text"
            placeholder="search your favorite dish"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-red-600 px-1 py-3 m-2 rounded-lg hover:bg-red-500 text-white"
            onClick={() => {
              const filteredSearch = originalListOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filteredSearch);
            }}
          >
            Search
          </button>

          <button
            className="bg-red-600 px-1 py-3 m-2 rounded-lg hover:bg-red-500 text-white"
            onClick={() => {
              setListOfRestaurant(originalListOfRestaurant);
              setSearchText("");
            }}
          >
            Clear
          </button>
        </div>
        <button
          className="bg-red-600 px-2 py-4 ml-5 rounded-lg hover:bg-red-500 text-white"
          onClick={() => TopRated()}
        >
          Top Rated Restaurants
        </button>
        <button className="bg-red-600 px-2 py-4 ml-5 rounded-lg hover:bg-red-500 text-white">
          Total Restaurants : {listOfRestaurant.length}
        </button>
      </div>

      <div className="flex flex-wrap">
        {listOfRestaurant.map((resData) => (
          <Link
            key={resData.info.id}
            to={"/restaurants/" + resData.info.id}
            className="noDecoration"
          >
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import CarouselBody from "./CarouselBody";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);

  const TopRated = () => {
    const topRatedRestaurants = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(topRatedRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setCarouselImages(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);

    // console.log(
    //   "CarouselBody",
    //   json?.data?.cards[0]?.card?.card?.imageGridCards?.info
    // );

    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => TopRated()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="carousel-images">
        {carouselImages.map((img) => {
          <CarouselBody key={img.id} carousel={carouselImages} />;
        })}
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

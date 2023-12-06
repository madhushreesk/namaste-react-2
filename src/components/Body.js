import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let listOfRestaurant = [
    {
      id: "241727",
      name: "Namaste",
      cloudinaryImageId: "dtcwa1rxdskp3crqvpr3",
      costForTwo: "₹100 for two",
      cuisines: [
        "South Indian",
        "Thalis",
        "Biryani",
        "Desserts",
        "Beverages",
        "Indian",
      ],
      avgRating: 3.8,
      parentId: "366271",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
    },
    {
      id: "241027",
      name: "Dominos",
      cloudinaryImageId: "dtcwa1rxdskp3crqvpr3",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian", "Thalis", "Beverages", "Indian"],
      avgRating: 4.1,
      parentId: "366271",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
    },
  ];

  const TopRated = () => {
    const topRatedRestaurants = listOfRestaurant.filter(
      (res) => res.avgRating > 4
    );
    return topRatedRestaurants;
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

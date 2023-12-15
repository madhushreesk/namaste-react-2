import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="w-[200px] ml-6 mt-5 bg-gray-100 p-3 rounded-lg hover:bg-gray-300">
      <img
        className="w-full max-h-36"
        src={CDN_IMAGE_URL + resData?.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h2 className="mt-2 text-lg">
        <strong>{resData?.info.name}</strong>
      </h2>
      <h4>{resData?.info.cuisines?.join(", ")}</h4>
      <h4>{resData?.info.avgRating} ⭐️</h4>
      <h4>{resData?.info.sla?.deliveryTime} minutes</h4>
      <h4>{resData?.info.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

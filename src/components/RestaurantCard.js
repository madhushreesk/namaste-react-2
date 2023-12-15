import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, locality, cloudinaryImageId, costForTwo } =
    resData.info;

  return (
    <div className="w-[200px] ml-6 mt-5 bg-gray-100 p-3 rounded-lg h-80 hover:bg-gray-300">
      <img
        className="w-full max-h-36"
        src={CDN_IMAGE_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h2 className="mt-2 text-lg">
        <strong>{name}</strong>
      </h2>
      <h4>
        {cuisines?.slice(0, 3).join(", ")}
        {cuisines && cuisines?.length > 3 && "..."}
      </h4>

      <h4>
        {avgRating} ⭐️ {resData?.info.sla?.deliveryTime} mins
      </h4>

      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

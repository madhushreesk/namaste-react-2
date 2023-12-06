import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_IMAGE_URL + resData?.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{resData?.name}</h3>
      <h4>{resData?.sla?.deliveryTime}</h4>
      <h4>{resData?.cuisines?.join(", ")}</h4>
      <h4>{resData?.avgRating}</h4>
      <h4>{resData?.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

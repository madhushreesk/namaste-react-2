import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_IMAGE_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <img className="menuImage" src={CDN_IMAGE_URL + cloudinaryImageId} />
      {itemCards && (
        <div>
          <h2>Menu</h2>
          <ul>
            {itemCards?.map((item) => (
              <li key={item.id}>
                {item?.card?.info?.name} - {"Rs."}
                {item?.card?.info?.price / 100}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;

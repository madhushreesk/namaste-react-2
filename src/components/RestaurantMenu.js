import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_IMAGE_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // console.log("Hook data", resInfo);

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

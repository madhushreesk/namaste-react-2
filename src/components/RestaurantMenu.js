import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log("Hook data", resInfo);

  if (resInfo === null) {
    return <MenuShimmer />;
  }

  const { name, cuisines, costForTwoMessage, city, locality, areaName } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className=" flex justify-center items-center flex-col mt-4">
      <div className="flex flex-col">
        <div className="font-bold text-xl">{name}</div>

        <div>
          {cuisines.join(", ")} - {costForTwoMessage}
        </div>
        <div>{(locality || areaName, city)}</div>
      </div>

      <div className="bg-gray-300 h-[2px] w-[420px] mt-3"></div>

      {itemCards ? (
        <div>
          <div>
            <ul>
              {itemCards?.map((item) => (
                <li className="bg-gray-200 m-4 p-4 w-[420px]" key={item.id}>
                  {item?.card?.info?.name} - {"Rs."}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="font-bold">No Menu Found !!!</div>
      )}
    </div>
  );
};

export default RestaurantMenu;

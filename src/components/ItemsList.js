import React from "react";
import { CDN_IMAGE_URL } from "../utils/constants";

const ItemsList = ({ itemCards }) => {
  return (
    <div>
      {itemCards?.map((item) => (
        <ul>
          <div key={item.card.info.id}>
            <div className="flex justify-between py-2">
              <div className="w-10/12">
                <div className="font-bold">{item?.card?.info?.name}</div>

                {"Rs. "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
                <div className="text-xs w-9/12">
                  {item?.card?.info?.description}
                </div>
                <div className="my-1">
                  <button className="bg-slate-300 p-2 shadow-lg  hover:bg-slate-200">
                    Add +
                  </button>
                </div>
              </div>

              <img
                className="w-2/12 h-28 rounded-sm"
                src={CDN_IMAGE_URL + item?.card?.info?.imageId}
                alt="imageRes"
              />
            </div>
          </div>

          <div className="w-full h-[1.5px] bg-gray-200 my-4"></div>
        </ul>
      ))}
    </div>
  );
};

export default ItemsList;

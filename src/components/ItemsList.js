import React, { useState } from "react";
import { CDN_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemsList = ({ itemCards }) => {
  const [addItemClick, setAddItemClick] = useState(false);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
    setAddItemClick(true);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {itemCards?.map((item) => (
        <ul>
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 text-left flex justify-between"
          >
            <div className="flex justify-between py-2">
              <div className="w-10/12 flex flex-col">
                <span className="font-bold">{item?.card?.info?.name}</span>
                <span className="font-bold">
                  {" Rs. "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>

                <div className="text-xs w-9/12">
                  {item?.card?.info?.description}
                </div>
                <div className="my-1">
                  <button
                    onClick={() => handleAddItem(item)}
                    className="bg-slate-300 p-2 shadow-lg  hover:bg-slate-200"
                  >
                    Add +
                  </button>
                  {addItemClick && (
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="bg-slate-300 p-2 ml-2 shadow-lg  hover:bg-slate-200"
                    >
                      Remove -
                    </button>
                  )}
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

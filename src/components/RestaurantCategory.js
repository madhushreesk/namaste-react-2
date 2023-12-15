import React from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="w-6/12 mx-auto my-3 h-auto flex justify-between bg-gray-200 shadow-lg p-4 font-bold">
        <span>
          {data?.title} - ({data?.itemCards?.length})
        </span>
        <span className="cursor-pointer">⌄</span>
      </div>
      <ItemsList itemCards={data} />
    </div>
  );
};

export default RestaurantCategory;

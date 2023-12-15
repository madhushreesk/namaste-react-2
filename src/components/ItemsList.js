import React from "react";

const ItemsList = ({ itemCards }) => {
  console.log(itemCards.itemCards, "Item");

  return (
    <div className="w-6/12 mx-auto my-3 flex flex-col bg-gray-200 shadow-lg p-4 font-bold">
      {itemCards?.itemCards?.map((item) => (
        <div>{item?.card?.info?.name}</div>
      ))}
    </div>
  );
};

export default ItemsList;

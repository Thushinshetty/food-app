import React from "react";

export default function ItemLists({ items }) {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-white border-b-2 text-left flex "
        >
          <div className="w-9/12 p-1">
            <div className="py-2">
              <span>{item.card.info.name} - ₹</span>
              <span>{item.card.info.price / 100 || item.card.info.defaultPrice/100} </span>
            </div>
            <p className="rounded-lg">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
                <button className="p-2 mx-6 shadow-lg rounded-md bg-gray-800 text-white" > Add + </button>
            </div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              alt=" food"
              
            />{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

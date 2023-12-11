import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../Utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory";

export default function RestaurantMenu() {
  //   const [resInfo, setResInfo] = useState(null);

  const { rid } = useParams();
  const resInfo = useRestuarantMenu(rid);
  const [showIndex, setShowIndex] = useState(0);
  
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card || [];
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  const Categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-5">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </h2>

      <h3 className="font-serif font-extrabold ">MENU</h3>
      <div className="">
        <ul>
          {Categories.map((item, index) => (
            <RestaurantCategory
              data={item?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

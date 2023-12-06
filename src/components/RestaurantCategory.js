import React, { useState } from "react";
import ItemLists from "./ItemLists";

export default function RestaurantCategory({ data ,showItems,setShowIndex}) {
     const [collapse,SetCollapse] = useState(false);
    const handleClick =() => {
        setShowIndex();
       SetCollapse(!collapse); 
    }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick} >
          <span className="font-bold text-base">
            {data.title}({data.itemCards.length})
          </span>
          <span>↓</span>
        </div>
        {collapse && showItems && <ItemLists items={data.itemCards} />}
      </div>
      
    </div>
  );
}

import React from "react";
import { Menu_API } from "../Utils/constants";
import { useState, useEffect } from "react";

export default function useRestuarantMenu(rid) {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_API + rid);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
}

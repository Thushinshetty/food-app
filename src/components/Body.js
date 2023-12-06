import React, { useEffect, useState } from "react";
import RestaurantCard,{withPromotedlabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
// let mockdata = [
//   {
//     name: "Meghana Foods",
//     cuisines: "Biriyani",
//     avgRating: 4.4,
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/195876a3181ef63f76e45e3a7b49b585",
//   },
//   {
//     name: "Tasty Delights",
//     cuisines: "Pizza",
//     avgRating: 3.2,
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0335dd45be555d0a4187255e57d2ca88",
//   },
//   {
//     name: "Spice Junction",
//     cuisines: "Indian",
//     avgRating: 4.6,
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/69a061b7e0f951cef2b4947946f94ec6",
//   },
//   {
//     name: "Sushi Palace",
//     cuisines: "Sushi",
//     avgRating: 3.8,
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kq5fmu174kikep8wfljh",
//   },
//   {
//     name: "Pasta Paradise",
//     cuisines: "Italian",
//     avgRating: 4.5,
//     timeForDelivery: "28min",
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wle5xrryznnyrdoxlchz",
//   },
//   {
//     name: "Green Garden",
//     cuisines: "Vegetarian",
//     avgRating: 4.3,
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/byilgyrcfz690ryoasww",
//   },
// ];

// let mockdata = [
//   {
//     info: {
//       id: "690730",
//       name: "Omm Nom Nomm",
//       cloudinaryImageId: "0b6ccedf0af57a82ecea2910397bb947",
//       locality: "BTM Layout",
//       areaName: "Koramangala",
//       costForTwo: "₹600 for two",
//       cuisines: ["Ice Cream", "Desserts"],
//       avgRating: 4.8,
//       feeDetails: {
//         restaurantId: "690730",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 4800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 4800,
//       },
//       parentId: "21184",
//       avgRatingString: "4.8",
//       totalRatingsString: "500+",
//       promoted: true,
//       adTrackingId:
//         "cid=9544429~p=1~eid=0000018b-fbe6-8554-4c22-9a9d00b50139~srvts=1700738270548~45826",
//       sla: {
//         deliveryTime: 23,
//         lastMileTravel: 4,
//         serviceability: "SERVICEABLE",
//         slaString: "23 mins",
//         lastMileTravelString: "4.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-11-23 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           textBased: {},
//           imageBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {},
//   },
//   {
//     info: {
//       id: "321571",
//       name: "KFC",
//       cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//       locality: "Embassy Golf Links",
//       areaName: "Indiranagar",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "321571",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3600,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3600,
//       },
//       parentId: "547",
//       avgRatingString: "4.1",
//       totalRatingsString: "100+",
//       sla: {
//         deliveryTime: 29,
//         lastMileTravel: 2.7,
//         serviceability: "SERVICEABLE",
//         slaString: "29 mins",
//         lastMileTravelString: "2.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-11-23 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           textExtendedBadges: {},
//           textBased: {},
//           imageBased: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "EVERY ITEM",
//         subHeader: "@ ₹179",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "swiggy://menu?restaurant_id=321571",
//       text: "RESTAURANT_MENU",
//       type: "DEEPLINK",
//     },
//   },
//   {
//     info: {
//       id: "321571",
//       name: "KFC",
//       cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//       locality: "Embassy Golf Links",
//       areaName: "Indiranagar",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "321571",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3600,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3600,
//       },
//       parentId: "547",
//       avgRatingString: "4.1",
//       totalRatingsString: "100+",
//       sla: {
//         deliveryTime: 29,
//         lastMileTravel: 2.7,
//         serviceability: "SERVICEABLE",
//         slaString: "29 mins",
//         lastMileTravelString: "2.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-11-23 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           textExtendedBadges: {},
//           textBased: {},
//           imageBased: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "EVERY ITEM",
//         subHeader: "@ ₹179",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "swiggy://menu?restaurant_id=321571",
//       text: "RESTAURANT_MENU",
//       type: "DEEPLINK",
//     },
//   },
// ];

export default function Body() {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9369154&lng=77.6407258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    // );
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus === false) return <h1>Check your Internet connection</h1>
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResList(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((Restaurant, index) => (
          <Link to={"/restaurant/" + Restaurant.info.id} key={index}>
            {Restaurant.info.isOpen?(
            <RestaurantCardPromoted resdata={Restaurant}/>
              ):(
                <RestaurantCard resdata={Restaurant}/>
                )}
          </Link>
        ))}
      </div>
    </div>
  );
};



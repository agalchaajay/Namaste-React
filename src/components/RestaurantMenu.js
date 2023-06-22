import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=5937&submitAction=ENTER"
    );

    const jsonData = await data.json();
    setResInfo(jsonData.data);

    console.log(jsonData);
    console.log(jsonData.data.cards[0].card.card.info.areaName);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="restaurant-menu contact-container">
      <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
      <p>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</p>
      <p>{resInfo?.cards[0]?.card?.card?.info?.totalRatingsString}</p>
      <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines}</p>
      <p>{resInfo?.cards[0]?.card?.card?.info?.areaName}</p>
      <p>{resInfo?.cards[0]?.card?.card?.info?.sla?.slaString}</p>
      <p>{resInfo?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}</p>
      <p>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

import resList from "../utils/CardData";
import RestaurantCard from "./RestaurantCard";
import { searchCard } from "../../App";
const Body = () => {
  return (
    <div>
      <div className="search-item">
        <input placeholder="Search here...."></input>
        <button className="search-btn" onClick={() => searchCard("xxx", event)}>
          Search
        </button>
      </div>
      <div className="restaurantcard-main">
        <RestaurantCard resData={resList[0]} />
        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

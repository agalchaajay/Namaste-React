import resList from "../utils/CardData";
import RestaurantCard from "./RestaurantCard";
import { searchCard } from "../../App";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);
  return (
    <div>
      <div className="search-item">
        <input
          className="input-search"
          placeholder="Search restaurants name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="filter-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, resList);
            // update the state of restaurants list
            setlistOfRestaurant(data);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filteredData = listOfRestaurant.filter((x) => x.data.avgRating > 4);
            setlistOfRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filteredData = resList;
            setlistOfRestaurant(filteredData);
            setSearchText("");
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="restaurantcard-main">
        {listOfRestaurant.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

export default Body;

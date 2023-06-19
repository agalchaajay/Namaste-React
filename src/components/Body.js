import RestaurantCard from "./RestaurantCard";
import { searchCard } from "../../App";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filterListOfRestaurant, setFilterListOfRestaurant] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setlistOfRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilterListOfRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  // if (listOfRestaurant.length == 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
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
            const data = listOfRestaurant.filter((restaurant) =>
              restaurant?.data?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            if (data.length == 0) {
            } else {
              // update the state of restaurants list
              setFilterListOfRestaurant(data);
            }
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filteredData = filterListOfRestaurant.filter(
              (x) => x.data.avgRating > 4
            );
            setFilterListOfRestaurant(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            fetchData();
            setSearchText("");
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="restaurantcard-main">
        {filterListOfRestaurant.map((restaurant, index) => (
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

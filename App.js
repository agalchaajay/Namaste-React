import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";

const Header = () => {
  return (
    <div className="header-Container">
      <div className="logo-main">
        <img
          className="logo"
          src="https://e0.pxfuel.com/wallpapers/812/478/desktop-wallpaper-food-delivery-app-icon-ios-icon-app-icon-design.jpg"
        ></img>
      </div>
      <div className="Nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  const resData = props.resData;
  console.log(resData.resName);
  return (
    <div className="restaurant-card">
      <div className="card-container">
        <img
          className="restaurant-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LZTRb_-b5ixB1fLsXggzz9Pw-8HfWbZcHST58stAdQ&usqp=CAU&ec=48600113"
        ></img>
        <div className="card-content">
          <h2>{resData.resName}</h2>
          <h5>{resData.cuisines}</h5>
          <h4>
            {resData.rating}
            <img
              className="rating-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKX2acAb9D9lgQw0_CX05PONEAIqIKRxlRF3la9ULcSQ&usqp=CAU&ec=48600113"
            ></img>
          </h4>
          <h4>{resData.time}</h4>
        </div>
      </div>
    </div>
  );
};

const resList = [
  {
    resName: "Meghana Foods",
    cuisines: "North Indian, Biryani,....",
    rating: 4.4,
    time: 35,
  },
  {
    resName: "KFC",
    cuisines: "Burger, Biryani,....",
    rating: 4.3,
    time: 30,
  },
  {
    resName: "Punjabi Foods",
    cuisines: "North Indian, Home Food....",
    rating: 4.2,
    time: 25,
  },
  {
    resName: "Roti wala",
    cuisines: "North Thali, Home Food,....",
    rating: 4.1,
    time: 38,
  },
  {
    resName: "Biryani Foods",
    cuisines: "Biryani,....",
    rating: 3.4,
    time: 50,
  },
  {
    resName: "Meghana Foods",
    cuisines: "North Indian, Biryani,....",
    rating: 4.4,
    time: 35,
  },
  {
    resName: "KFC",
    cuisines: "Burger, Biryani,....",
    rating: 4.3,
    time: 30,
  },
  {
    resName: "Punjabi Foods",
    cuisines: "North Indian, Home Food....",
    rating: 4.2,
    time: 25,
  },
  {
    resName: "Roti wala",
    cuisines: "North Thali, Home Food,....",
    rating: 4.1,
    time: 38,
  },
  {
    resName: "Biryani Foods",
    cuisines: "Biryani,....",
    rating: 3.4,
    time: 50,
  },
  {
    resName: "Meghana Foods",
    cuisines: "North Indian, Biryani,....",
    rating: 4.4,
    time: 35,
  },
  {
    resName: "KFC",
    cuisines: "Burger, Biryani,....",
    rating: 4.3,
    time: 30,
  },
  {
    resName: "Punjabi Foods",
    cuisines: "North Indian, Home Food....",
    rating: 4.2,
    time: 25,
  },
  {
    resName: "Roti wala",
    cuisines: "North Thali, Home Food,....",
    rating: 4.1,
    time: 38,
  },
  {
    resName: "Biryani Foods",
    cuisines: "Biryani,....",
    rating: 3.4,
    time: 50,
  },
  {
    resName: "Meghana Foods",
    cuisines: "North Indian, Biryani,....",
    rating: 4.4,
    time: 35,
  },
  {
    resName: "KFC",
    cuisines: "Burger, Biryani,....",
    rating: 4.3,
    time: 30,
  },
  {
    resName: "Punjabi Foods",
    cuisines: "North Indian, Home Food....",
    rating: 4.2,
    time: 25,
  },
  {
    resName: "Roti wala",
    cuisines: "North Thali, Home Food,....",
    rating: 4.1,
    time: 38,
  },
  {
    resName: "Biryani Foods",
    cuisines: "Biryani,....",
    rating: 3.4,
    time: 50,
  },
];
const Body = () => {
  return (
    <div>
      <div className="search-item">
        <input placeholder="Search here...."></input>
        <button className="search-btn"> Search</button>
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

const RootApp = () => {
  return (
    <div className="Main">
      <div className="Header">
        <Header />
      </div>
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RootApp />);

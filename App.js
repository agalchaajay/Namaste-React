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

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="card-container">
        <img
          className="restaurant-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LZTRb_-b5ixB1fLsXggzz9Pw-8HfWbZcHST58stAdQ&usqp=CAU&ec=48600113"
        ></img>
        <div className="card-content">
          <h2> Restaurant Name</h2>
          <h5> North Indian, Biryani,....</h5>
          <h4>
            4.4
            <img
              className="rating-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKX2acAb9D9lgQw0_CX05PONEAIqIKRxlRF3la9ULcSQ&usqp=CAU&ec=48600113"
            ></img>
          </h4>
          <h4>35 min</h4>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search-item">
        <input placeholder="Search here...."></input>
        <btn className="search-btn"> Search</btn>
      </div>
      <div className="restaurantcard-main">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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

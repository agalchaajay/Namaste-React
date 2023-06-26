import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CARD_IMAGE_URL } from "../utils/constants";
import "../styles/RestaurantMenu.css";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log("qqqq" + resId);
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=${resId}`
    );

    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="restutant-body">
      <div className="restaurant-menu-body">
        <div className="restaurant-menu-container">
          <div className="res-info">
            <div className="res-name-rating">
              <div className="text-info">
                <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
                <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines}</p>
                <p>
                  {resInfo?.cards[0]?.card?.card?.info?.areaName} -{" "}
                  {
                    resInfo?.cards[0]?.card?.card?.info?.sla
                      ?.lastMileTravelString
                  }
                </p>
              </div>
              <div className="rating">
                <div className="rating-head">
                  <span className="fa fa-star checked"></span>
                  <p>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</p>
                </div>
                <p>{resInfo?.cards[0]?.card?.card?.info?.totalRatingsString}</p>
              </div>
            </div>
            <hr className="dotted-line"></hr>
            <div>
              <div className="time-cost-section">
                <p>{resInfo?.cards[0]?.card?.card?.info?.sla?.slaString}</p>
                <p>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
              </div>
              <div className="discount-header">
                {(resInfo?.cards[1]?.card?.card?.gridElements.infoWithStyle.offers).map(
                  (item) => (
                    <div className="discount-card">
                      <p className="discount-card-header">
                        {item?.info?.header}
                      </p>
                      <p className="discount-info">
                        {item?.info?.couponCode} {" | "}{" "}
                        {item?.info?.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <hr className="dotted-line"></hr>

          <div className="menu-item-body">
            <div className="menu-item-container">
              <div className="menu-item-head">
                <h2>Menu Item</h2>
              </div>
              <div className="recommended-body">
                <div className="recommended-head">
                  <h3>
                    Recommended (
                    {
                      resInfo?.cards[resInfo.cards.length - 1]?.groupedCard
                        ?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
                        ?.length
                    }
                    )
                  </h3>
                </div>
                <div className="recommended-container">
                  <div className="recommeded-item">
                    {(resInfo?.cards[
                      resInfo.cards.length - 1
                    ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map(
                      (item) => (
                        <>
                          <div className="recommeded-item-info">
                            <div className="recommended-item-text">
                              <h3>{item?.card?.info?.name}</h3>
                              <p>
                                {"Rs."}
                                {item?.card?.info?.price / 100}
                              </p>
                              <p>{item?.card?.info?.description}</p>
                            </div>
                            <div className="recommended-item-image">
                              <img
                                className="item-logo"
                                src={CARD_IMAGE_URL + item?.card?.info?.imageId}
                              ></img>
                              <button className="add-btn">ADD</button>
                            </div>
                          </div>
                          <hr className="dotted-line"></hr>
                        </>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="veg-Stater"> 
        <h3>
          Veg Stater (
          {
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards?.length
          }
          )
        </h3>
        {(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
          (item) => (
            <li>{item?.card?.info?.name}</li>
          )
        )}
      </div> */}
          {/* <div className="veg-Stater">
        <h3>
          Non-Veg Stater (
          {
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
              ?.card?.card?.itemCards?.length
          }
          )
        </h3>
        {(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards).map(
          (item) => (
            <li>{item?.card?.info?.name}</li>
          )
        )}
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

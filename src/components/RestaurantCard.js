import { CARD_IMAGE_URL } from "../utils/constants";
import { RATING_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const resData = props.resData;
  return (
    <div className="restaurant-card">
      <div className="card-container">
        <img
          className="restaurant-img"
          src={CARD_IMAGE_URL + resData.cloudinaryImageId}
        ></img>
        <div className="card-content">
          <h2>{resData.name}</h2>
          <h5>{resData.cuisines.join(", ")}</h5>
          <div className="data-container">
            <div className="rating-container">
              <h4>
                <img className="rating-image" src={RATING_IMAGE_URL}></img>
                {resData.avgRating}
              </h4>
            </div>
            <h4>{resData.deliveryTime} min</h4>
            <h4>{resData.costForTwoString}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

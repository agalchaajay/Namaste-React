import { CARD_IMAGE_URL } from "../utils/constants";
import { RATING_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const resData = props.resData;
  return (
    <div className="restaurant-card">
      <div className="card-container">
        <img className="restaurant-img" src={CARD_IMAGE_URL}></img>
        <div className="card-content">
          <h2>{resData.resName}</h2>
          <h5>{resData.cuisines}</h5>
          <h4>
            {resData.rating}
            <img className="rating-image" src={RATING_IMAGE_URL}></img>
          </h4>
          <h4>{resData.time} mins</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

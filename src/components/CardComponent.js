// card component
import { card_img_link } from "../../utils/links";

const CardComponent = (props) => {
  const rest_logo = props.rest_obj.info.cloudinaryImageId;
  return (
    <div className="card-item">
      <img
        alt="resturant-logo"
        className="rest-logo"
        src={card_img_link + rest_logo}
      ></img>
      <h4>{props.rest_obj.info.name}</h4>
      <h3>{props.rest_obj.info.avgRatingString} Ratings </h3>
      <h3>{props.rest_obj.info.sla.deliveryTime} min</h3>
      <h5>{props.rest_obj.info.cuisines.join(",")}</h5>
      <h2>{props.rest_obj.info.areaName}</h2>
    </div>
  );
};

export default CardComponent;

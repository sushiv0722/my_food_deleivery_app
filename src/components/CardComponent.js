// card component

const CardComponent = (props) => {
  const { rest_name, ratings, time, cusines, address } = props.rest_obj;
  return (
    <div className="card-item">
      <img
        alt="resturant-logo"
        className="rest-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/30/388ac633-8423-4786-8c1c-a43c929225d7_1107286.jpg"
      ></img>
      <h3>{rest_name}</h3>
      <h3>{ratings}</h3>
      <h3>{time}</h3>
      <h5>{cusines}</h5>
      <h2>{address}</h2>
    </div>
  );
};

export default CardComponent;

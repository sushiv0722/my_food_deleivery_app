import React from "react";
import ReactDom from "react-dom/client";

//Header component

const HeaderComponent = () => {
  return (
    <div id="header-container">
      <img
        className="head-logo"
        alt="app-logo"
        src="https://cdn.dribbble.com/userupload/16778068/file/original-6e3a9c02cdc6bacd491d6d977f02b2dd.jpg?resize=1600x1200&vertical=center"
      ></img>
      <div id="nav-container">
        <ul id="nav-list">
          <li>About Us</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

// body component

//hard coded data for the dynamix excessing of the data , that the exactly format how data arriver from the backened of from the api calls

const rest_obj_list = [
  {
    id: 1,
    rest_name: "The Cookhouse",
    ratings: "3.3",
    time: "30-40 mins",
    cusines: "chineese,biryani,manglorean",
    address: "PANJIMOGER",
  },
  {
    id: 2,
    rest_name: "SHREE KRISHNA VILASA",
    ratings: "4.7",
    time: "40-45 mins",
    cusines: "south indians, chaat , thalis...",
    address: "Urwa",
  },
  {
    id: 3,
    rest_name: "five Star indains",
    ratings: "4.5",
    time: "55-60 mins",
    cusines: "Burgers",
    address: "Lalbagh",
  },
];

const BodyComponent = () => {
  return (
    <div id="card-container">
      {rest_obj_list.map((rest) => (
        <CardComponent key={rest.id} rest_obj={rest} />
      ))}
    </div>
  );
};
// app level component

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppComponent />);

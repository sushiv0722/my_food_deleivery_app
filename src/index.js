import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

// body component

//hard coded data for the dynamix excessing of the data , that the exactly format how data arriver from the backened of from the api calls

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

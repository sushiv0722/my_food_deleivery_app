import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Help from "./components/Help";
import { useRouteError } from "react-router-dom";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";

// body component

//hard coded data for the dynamix excessing of the data , that the exactly format how data arriver from the backened of from the api calls

// app level component

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);

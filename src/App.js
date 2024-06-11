import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components.js/Header";
import Body from "./components.js/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components.js/About";
import Contact from "./components.js/Contact";
import Error from "./components.js/Error";
import RestaurantMenu from "./components.js/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

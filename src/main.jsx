/* eslint-disable */

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import About from "./Components/About.jsx";
import Cart from "./Components/NavBar/Cart.jsx";
import FoodTypeRes from "./Components/FoodTypeRes.jsx";
import Help from "./Components/NavBar/Help.jsx";
import Login from "./Components/NavBar/Login.jsx";
import Resturants from "./Components/Resturants.jsx";
import ResturantMenu from "./Components/ResturantMenu.jsx";
import Signup from "./Components/NavBar/Signup.jsx";
import SetLocation from "./Components/NavBar/SetLocation.jsx";
import Search from "./Components/NavBar/Search.jsx";

import "./index.css";
import Offers from "./Components/NavBar/Offers.jsx";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Resturants />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/:id",
        element: <FoodTypeRes />,
      },
      {
        path: "/resmenu/:resid",
        element: <ResturantMenu />,
      },
      {
        path: "/setLocation",
        element: <SetLocation />,
      },
      // {
      //   path: "/search",
      //   element: <Search />,
      // },
      {
        path: "/offers",
        element: <Offers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoutes}>
    <App />
  </RouterProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
  },

  {
    path: "/coffees/add",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/coffees/details/:id",
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({ params }) => fetch(`https://espresso-emporium-server-xi.vercel.app/coffees/${params.id}`),
  },
  {
    path: "/coffees/update/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://espresso-emporium-server-xi.vercel.app/coffees/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-[800px] mx-auto py-2">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);

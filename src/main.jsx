import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Logo from "./pages/Logo";
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import Aftercare from "./pages/Aftercare";
import "./style.css";

const router = createHashRouter([
  {
    // Root
    path: "/",
    element: <Homepage />,
  },
  {
    // Booking
    path: "booking",
    element: <Booking />,
  },
  {
    // Aftercare
    path: "aftercare",
    element: <Aftercare />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Logo />
    <RouterProvider router={router} />
  </React.StrictMode>
);
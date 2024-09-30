import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Logo from "./pages/Logo";
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import Aftercare from "./pages/Aftercare";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
import Error403 from "./pages/Error403";

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
  {
    // Thank You
    path: "thank-you",
    element: <ThankYou />,
  },
  {
    // Error
    path: "error",
    element: <Error />,
  },
  {
    // All other routes, 403 Error
    path: "*",
    element: <Error403 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Logo />
    <RouterProvider router={router} />
  </React.StrictMode>
);

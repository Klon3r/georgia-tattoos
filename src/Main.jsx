import React from "react";
import {
  createHashRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import Logo from "./pages/Logo";
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import BookingPolicy from "./pages/BookingPolicy";
import Aftercare from "./pages/Aftercare";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
import Error403 from "./pages/Error403";

import "./style.css";

function Layout() {
  const location = useLocation();

  return <>{location.pathname !== "/studio" && <Logo />}</>;
}

const router = createHashRouter([
  {
    // Root
    path: "/",
    element: (
      <>
        <Layout />
        <Homepage />
      </>
    ),
  },
  {
    // Booking
    path: "booking",
    element: (
      <>
        <Layout />
        <Booking />
      </>
    ),
  },
  {
    // Booking Policy
    path: "booking-policy",
    element: (
      <>
        <Layout />
        <BookingPolicy />
      </>
    ),
  },
  {
    // Aftercare
    path: "aftercare",
    element: (
      <>
        <Layout />
        <Aftercare />
      </>
    ),
  },
  {
    // Thank You
    path: "thank-you",
    element: (
      <>
        <Layout />
        <ThankYou />
      </>
    ),
  },
  {
    // Error
    path: "error",
    element: (
      <>
        <Layout />
        <Error />
      </>
    ),
  },
  {
    // All other routes, 403 Error
    path: "*",
    element: (
      <>
        <Layout />
        <Error403 />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import {
  createBrowserRouter,
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
import ConsentForm from "./pages/ConsentForm";
import Error from "./pages/Error";
import Error403 from "./pages/Error403";
import spiderwebBackground from "./assets/spiderweb_background.png";
import pinkCheckBackground from "./assets/background-pink-checks.jpg";
import greenCheckBackground from "./assets/background-green-checks.jpg";

import "./style.css";
import ConsentSubmitted from "./pages/components/ConsentForm/ConsentSubmitted";

function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/consent") {
      document.body.style.backgroundColor = "#fcdef8";
      document.body.style.backgroundImage = "none";
    } else {
      document.body.style.backgroundColor = "#f6bbed";
      document.body.style.backgroundImage = `url(${pinkCheckBackground})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
    }
  }, [location.pathname]);

  return <>{location.pathname !== "/studio" && <Logo />}</>;
}

const router = createBrowserRouter([
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
    path: "/booking",
    element: (
      <>
        <Layout />
        <Booking />
      </>
    ),
  },
  {
    // Booking Policy
    path: "/booking-policy",
    element: (
      <>
        <Layout />
        <BookingPolicy />
      </>
    ),
  },
  {
    // Aftercare
    path: "/aftercare",
    element: (
      <>
        <Layout />
        <Aftercare />
      </>
    ),
  },
  {
    // Thank You
    path: "/thank-you",
    element: (
      <>
        <Layout />
        <ThankYou />
      </>
    ),
  },
  {
    // Consent Form
    path: "/consent",
    element: (
      <>
        <Layout />
        <ConsentForm />
      </>
    ),
  },
  {
    // Consent Submitted
    path: "/consent-submitted",
    element: (
      <>
        <Layout />
        <ConsentSubmitted />
      </>
    ),
  },
  {
    // Error
    path: "/error",
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

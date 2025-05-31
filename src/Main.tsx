import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./Style.css";
import pinkCheckBackground from "./assets/background-pink-checks.jpg";
import Homepage from "./pages/Homepage.tsx";
import Logo from "./pages/Logo.tsx";
import Aftercare from "./pages/Aftercare.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/consent") {
      document.body.style.backgroundColor = "#fcdef8";
      document.body.style.backgroundImage = "none";
    } else {
      document.body.style.backgroundColor = "#f6bbed";
      document.body.style.backgroundImage = `url(${pinkCheckBackground})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    }
  }, [location.pathname]);

  return (
    <>
      <Logo />
    </>
  );
};

const rootTailwindStyle =
  "min-h-screen flex flex-col gap-15 items-center justify-start font-medium text-base";

const router = createBrowserRouter([
  {
    // Homepage
    path: "/",
    element: (
      <div className={rootTailwindStyle}>
        <Layout />
        <Homepage />
      </div>
    ),
  },
  {
    // Aftercare
    path: "aftercare",
    element: (
      <div className={rootTailwindStyle}>
        <Layout />
        <Aftercare />
      </div>
    ),
  },
  {
    // Error
    path: "error",
    element: (
      <div className={rootTailwindStyle}>
        <Layout />
        <ErrorPage
          headerText="Error"
          errorMessage="There has been an error please try again."
        />
      </div>
    ),
  },
  {
    // 403 Error (All other routes)
    path: "*",
    element: (
      <div className={rootTailwindStyle}>
        <Layout />
        <ErrorPage
          headerText="403 Not Found"
          errorMessage="That page doesn't exist, please go back to the homepage."
        />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

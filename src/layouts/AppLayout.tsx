import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import pinkCheckBackground from "../assets/Background/pink-checks.jpg";
import Header from "../components/Header/Header";

const AppLayout = () => {
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
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;

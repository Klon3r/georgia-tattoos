import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Homepage from "./pages/Homepage";
import Aftercare from "./pages/Aftercare";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";
import Error from "./pages/Error";
import Error403 from "./pages/Error403";

export const Router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { path: "/", Component: Homepage },
      { path: "aftercare", Component: Aftercare },
      { path: "booking", Component: Booking },
      { path: "thank-you", Component: ThankYou },
      { path: "error", Component: Error },
      { path: "*", Component: Error403 },
    ],
  },
]);

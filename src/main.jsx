import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Layout from "./components/Layout.jsx";
import Menu from "./components/Menu.jsx";
import Booking from "./components/Booking.jsx";
import Chef from "./components/chef.jsx";
import Achievements from "./components/Achievements.jsx";
import PopularDeals from "./components/PopularDeals.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/Contact",
        element: <Booking />,
      },
      {
        path: "/about",
        element: (
          <>
            <Achievements />
            <PopularDeals />
            <Chef />
          </>
        ),
      },
    ],
  },

  //   path: "/",
  //   element: <App />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

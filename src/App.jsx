import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PriceList from "./components/PriceList";
import Menu from "./components/Menu";
import PopularDeals from "./components/PopularDeals";
import Booking from "./components/Booking";
import Achievements from "./components/Achievements";
import Chefs from "./components/Chefs";
import FoodGallery from "./components/FoodGallery";

const App = () => {
  return (
    <>
      <Hero />
      <PriceList />
      <Menu />
      <PopularDeals />
      <Booking />
      <Achievements />
      <Chefs />
      <FoodGallery />
    </>
  );
};

export default App;

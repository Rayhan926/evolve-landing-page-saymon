import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import SoldOutSlider from "./components/SoldOutSlider";

const Mambaday = () => {
  return (
    <div className="text-white hidden lg:block">
      <HeroSection />
      <InfoSection />
      <SoldOutSlider />
    </div>
  );
};

export default Mambaday;

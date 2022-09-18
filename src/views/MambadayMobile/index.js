import React from "react";
import SoldOutSlider from "../Mambaday/components/SoldOutSlider";
import HeroSection from "./components/HeroSection";
import SliderSection from "./components/SliderSection";

const MambadayMobile = () => {
  return (
    <div className="lg:hidden text-white">
      <HeroSection />
      <SliderSection />

      <SoldOutSlider />
    </div>
  );
};

export default MambadayMobile;

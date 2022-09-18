import React, { useEffect, useState } from "react";
import useNumberSlider from "../../../hooks/useNumberSlider";

const InfoSlideShow = () => {
  const { activeSlide } = useNumberSlider();

  return (
    <div className="info_number_slider">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[155px] h-[180px]">{activeSlide.icon}</div>
        <div className="text-[24px] leading-[36px] font-northstar-regular font-bold text-off-white text-center">
          {activeSlide.description}
        </div>
      </div>
    </div>
  );
};

export default InfoSlideShow;

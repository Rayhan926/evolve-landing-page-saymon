import Image from "next/image";
import React from "react";
import { useState } from "react";
import useSlider from "../../../hooks/useSlider";

const InfoSlider = () => {
  const { activeImage, next, prev } = useSlider();
  return (
    <>
      <div className="slider_container">
        <div className="max-w-[432px]">
          <Image {...activeImage} alt="Slider" width={800} height={1000} />
        </div>
      </div>
      <div className="slider_toogleer">
        <div className="flex justify-center items-center h-full">
          <button
            className="w-[142px] h-full flex items-center justify-center font-northstar-regular font-bold text-[62px] leading-[96px]"
            onClick={prev}
          >
            {"<"}
          </button>

          <button
            className="w-[142px] h-full flex items-center justify-center font-northstar-regular font-bold text-[62px] leading-[96px]"
            onClick={next}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoSlider;

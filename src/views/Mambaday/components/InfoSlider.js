import Image from "next/image";
import React from "react";
import { useState } from "react";

const images = [
  {
    src: "/images/mamba-day-shoes-updated-min.png",
    alt: "mamba-day-shoes-updated-min",
  },
  {
    src: "/images/half-folded-01-1000-min.png",
    alt: "half-folded-01-1000-min",
  },
];

const InfoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images[activeIndex];
  const next = () => {
    setActiveIndex((prev) => {
      return prev + 1 > images.length - 1 ? 0 : prev + 1;
    });
  };
  const prev = () => {
    setActiveIndex((prev) => {
      return prev - 1 < 0 ? images.length - 1 : prev - 1;
    });
  };

  console.log(activeIndex);
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

import React from "react";
import { atom, useAtom } from "jotai";

const activeSliderAtom = atom(0);

const images = [
  {
    src: "/images/half-folded-01-1000-min.png",
    alt: "half-folded-01-1000-min",
  },
  {
    src: "/images/mamba-day-shoes-updated-min.png",
    alt: "mamba-day-shoes-updated-min",
  },
];

const useSlider = () => {
  const [activeIndex, setActiveIndex] = useAtom(activeSliderAtom);

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

  return {
    activeImage,
    next,
    prev,
  };
};

export default useSlider;

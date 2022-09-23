import React from "react";
import { atom, useAtom } from "jotai";

const activeSliderAtom = atom(0);
const offScreenImageAtom = atom(false);

const images = [
  {
    src: "/images/half-folded-01-1000-min.png",
    alt: "half-folded-01-1000-min",
    hasOffScreenImage: true,
  },
  {
    src: "/images/mamba-day-shoes-updated-min.png",
    alt: "mamba-day-shoes-updated-min",
  },
];

const offScreenImage = {
  src: "/images/half-folded-02-1000-min.png",
  alt: "half-folded-02-1000-min",
  hasOffScreenImage: true,
};

const useSlider = () => {
  const [activeIndex, setActiveIndex] = useAtom(activeSliderAtom);
  const [isOffScreenImage, setIsOffScreenImage] = useAtom(offScreenImageAtom);

  const activeImage = isOffScreenImage ? offScreenImage : images[activeIndex];
  const next = () => {
    setIsOffScreenImage(false);
    setActiveIndex((prev) => {
      return prev + 1 > images.length - 1 ? 0 : prev + 1;
    });
  };
  const prev = () => {
    setIsOffScreenImage(false);
    setActiveIndex((prev) => {
      return prev - 1 < 0 ? images.length - 1 : prev - 1;
    });
  };

  const toggleOffscreenImage = () => {
    setIsOffScreenImage((prev) => !prev);
  };

  return {
    activeImage,
    next,
    prev,
    toggleOffscreenImage,
  };
};

export default useSlider;

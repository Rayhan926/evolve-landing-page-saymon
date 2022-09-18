import React from "react";

const SoldOutSlider = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex items-end overflow-hidden">
      <div className="h-[90px] w-full bg-white relative">
        <span className="sliding flex">
          <span>SOLd OUT /</span>
          <span>SOLd OUT /</span>
          <span>SOLd OUT /</span>
          <span>SOLd OUT /</span>
          <span>SOLd OUT /</span>
          <span>SOLd OUT /</span>
          <span>SOLd OUT /</span>
          <span>SOLd OUT /</span>
          <span>SOLd OUT </span>
        </span>
      </div>
    </div>
  );
};

export default SoldOutSlider;

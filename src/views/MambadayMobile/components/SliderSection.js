import Image from "next/image";
import React, { useCallback } from "react";
import useNumberSliderMobile from "../../../hooks/useNumberSliderMobile";
import useSlider from "../../../hooks/useSlider";
import AccordionSection from "./AccordionSection";

const SliderSection = () => {
  const { activeImage, next, prev } = useSlider();
  const { activeSlide } = useNumberSliderMobile();

  const Slide = useCallback(() => {
    return (
      <div className="w-full h-full flex flex-col items-end justify-end gap-5 pr-5 pb-11 animate-from-right">
        <div>{activeSlide.icon}</div>

        <div className="font-northstar-regular font-bold text-right text-2xl leading-[40px]">
          {activeSlide.description}
        </div>
      </div>
    );
  }, [activeSlide]);

  return (
    <section className="h-[170vh] bg-gold flex flex-col max-w-[100vw] overflow-x-hidden">
      {/* Slider Container --Start-- */}
      <div className="grid flex-[0.35] max-h-full">
        <div className="w-full h-full relative">
          <div className="grid w-full h-full">
            <div className="self-center grid justify-self-center">
              <div className="max-w-[75%] mx-auto">
                <Image
                  {...activeImage}
                  alt="Slider"
                  width={800}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Container --End-- */}

      {/* Number Slider And Navigation Container --Start-- */}
      <div className="flex-[0.25] relative">
        {/* Navigation --Start-- */}
        <div className="bg-gold grid h-full absolute w-full z-[1]">
          <div className="self-start flex w-[40%] h-full justify-self-start pl-[5%] z-[999]">
            <span
              onClick={prev}
              className="self-start text-off-white flex-[1] font-northstar-regular justify-self-center text-[4rem] inline"
            >
              {"<"}
            </span>
            <span
              onClick={next}
              className="self-start text-off-white flex-[1] font-northstar-regular justify-self-center flex justify-end text-[4rem] inline"
            >
              {">"}
            </span>

            {/* <span>{"<"}</span>
            <span>{">"}</span> */}
          </div>
        </div>
        {/* Navigation --End-- */}

        {/* Number Slider --Start-- */}
        <div
          style={{ clipPath: "polygon(0 65%,100% 0,100% 100%,0 100%)" }}
          className="bg-dark w-full h-full absolute z-[2]"
        >
          <Slide />
        </div>
        {/* Number Slider --End-- */}
      </div>
      {/* Number Slider And Navigation Container --End-- */}

      <AccordionSection />
    </section>
  );
};

export default SliderSection;

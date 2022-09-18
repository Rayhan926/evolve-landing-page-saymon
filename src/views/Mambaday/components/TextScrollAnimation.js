import React from "react";
import { cx } from "../../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const textStyle =
  "text-[80px] leading-[80px] font-northstar-regular font-bold whitespace-nowrap";

const TextScrollAnimation = ({ className = "text-[#353535]" }) => {
  useEffect(() => {
    gsap.to(".animate_wrapper", {
      scrollTrigger: {
        trigger: "#hero_section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      x: 1000,
    });
  }, []);

  return (
    <div className={cx("animate_wrapper", className)}>
      <p className={cx(textStyle, "-translate-x-0")}>
        MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY
      </p>
      <p className={cx(textStyle, "translate-x-[260px]")}>
        MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY
      </p>
      <p className={cx(textStyle, "translate-x-[360px]")}>
        MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY MAMBA dAY
      </p>
    </div>
  );
};

export default TextScrollAnimation;

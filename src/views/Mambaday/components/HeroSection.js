import Image from "next/image";
import React from "react";
import TextScrollAnimation from "./TextScrollAnimation";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-dark overflow-hidden relative"
      id="hero_section"
    >
      {/* Dark Part --Start-- */}
      <div className="h-full flex flex-col justify-center items-end">
        <TextScrollAnimation />
      </div>
      {/* Dark Part --End-- */}
      {/* Gold Part --Start-- */}
      <div
        style={{ clipPath: "polygon(69.3% 0,100% 0,100% 100%,50% 100%)" }}
        className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 bg-gold"
      >
        <TextScrollAnimation className="text-[#e8c59b]" />
      </div>
      {/* Gold Part --End-- */}

      {/* Pant --Start-- */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2">
        <div className="w-[378px]">
          <Image
            alt="mamba-folded-mobile-min"
            src={"/images/mamba-folded-mobile-min.png"}
            width={753}
            height={800}
          />
        </div>
      </div>
      {/* Pant --End-- */}
    </section>
  );
};

export default HeroSection;

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[110vh] w-full relative">
      {/* Gold Bg --Start-- */}
      <div
        className="w-full h-full bg-gold absolute top-0 left-0"
        style={{ clipPath: "polygon(0 45%,100% 10%,100% 100%,0 100%)" }}
      ></div>
      {/* Gold Bg --End-- */}
      <div className="mobile_hero_content_wrapper w-full h-full absolute z-10 top-0 left-0">
        {/* Mamba Shorts --Start-- */}
        <div className="mobile_mamba_shorts_wrapper">
          <div className="grid h-full">
            <div className="max-w-[65%] mx-auto">
              <Image
                alt="mamba-folded-mobile-min"
                src={"/images/mamba-folded-mobile-min.png"}
                width={753}
                height={800}
              />
            </div>
          </div>

          <div className="text-[48px] leading-[40px] font-bold font-northstar-regular text-off-white text-center -translate-y-2.5">
            <h1>MAMBA</h1>
            <h1>dAY</h1>
          </div>
        </div>
        {/* Mamba Shorts --End-- */}

        {/* Page Desc --Start-- */}
        <div className="mobile_page_desc">
          <p className="text-sm text-off-white font-poppins">
            Released at tipoff of Kobe Bryant’s last game, the Mamba Day Kobe XI
            celebrated Kobe’s career by wrapping the upper in his memorable
            numbers. Our adaptation commemorates both sneaker history and Kobe's
            legacy by including additional numbers within the silhouette of our
            shorts.
          </p>
        </div>
        {/* Page Desc --End-- */}
      </div>
    </section>
  );
};

export default HeroSection;

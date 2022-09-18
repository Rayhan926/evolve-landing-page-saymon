import React from "react";
import InfoSlider from "./InfoSlider";
import InfoSlideShowAndAccordion from "./InfoSlideShowAndAccordion";

const InfoSection = () => {
  return (
    <section className="info_section">
      {/* Left Part --Start-- */}
      <div className="info_left_box">
        <div className="info_desc_container">
          <div>
            <h1 className="text-[32px] leading-[38px] font-northstar-regular font-bold text-off-white mb-5 text-center">
              MAMBA dAY
            </h1>

            <p className="font-poppins text-base text-off-white text-left">
              Released at tipoff of Kobe Bryant’s last game, the Mamba Day Kobe
              XI celebrates Kobe’s career by wrapping the upper in his memorable
              numbers. Our adaptation includes additional historic numbers, such
              as Kobe&apos;s Hall of Fame induction date, All-Star number, as
              well as paying homage to Gianna Bryant. The shorts signify the
              history and impact of Kobe&apos;s Legacy and serve as a reminder
              of the greatness Kobe represented on and off the court.
            </p>
          </div>
        </div>

        <InfoSlideShowAndAccordion />
      </div>
      {/* Left Part --End-- */}

      {/* Right Part --Start-- */}
      <div className="info_slider">
        <InfoSlider />
      </div>
      {/* Right Part --End-- */}
    </section>
  );
};

export default InfoSection;

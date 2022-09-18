import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Menu from "./Menu";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const closeHandler = () => setOpen(false);
  return (
    <>
      <Menu isOpen={open} onClose={closeHandler} />
      <footer
        onClick={() => setOpen(true)}
        className={`h-[126px] bg-white z-[99] flex items-center fixed bottom-0 left-0 w-full text-dark cursor-pointer duration-300 hover:bg-dark hover:text-white ${
          open
            ? "opacity-0 pointer-events-none !duration-[0s] delay-[50ms]"
            : "opacity-100 pointer-events-auto !duration-300"
        }`}
      >
        {/* <Marquee gradient={false} speed={200}> */}
        <div className="flex items-center font-northstar-italic text-[64px] leading-[59px] home_page_footer absolute top-1/2 -translate-y-1/2">
          <span>EvolviNg... /</span>
          &nbsp;
          <span>EvolviNg... /</span>
          &nbsp;
          <span>EvolviNg... /</span>
          &nbsp;
          <span>EvolviNg... /</span>
          &nbsp;
          <span>EvolviNg... /</span>
          &nbsp;
          <span>EvolviNg... /</span>
          &nbsp;
          <span>EvolviNg...</span>
          &nbsp;
        </div>
        {/* </Marquee> */}
      </footer>
    </>
  );
};

export default Footer;

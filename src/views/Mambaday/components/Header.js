import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] text-[20px] lg:h-[112px] lg:text-[24px] font-northstar-regular pl-6 lg:pl-[75px] flex items-center z-50 text-white">
      <Link href={"/"}>
        <a>EVOLVE-SHORTS</a>
      </Link>
    </header>
  );
};

export default Header;

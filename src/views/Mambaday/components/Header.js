import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[112px] text-[24px] font-northstar-regular pl-[75px] flex items-center z-50">
      <Link href={"/"}>
        <a>EVOLVE-SHORTS</a>
      </Link>
    </header>
  );
};

export default Header;

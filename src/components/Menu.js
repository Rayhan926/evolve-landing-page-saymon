import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Div100vh from "react-div-100vh";
import { useClickAway } from "react-use";
import { cx } from "../utils";

const Menu = ({ onClose, isOpen }) => {
  const router = useRouter();
  return (
    <Div100vh
      className={`absolute top-0 left-0 w-full ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute bottom-0 left-0 w-full z-50 bg-white overflow-hidden duration-300 ${
          isOpen ? "h-[100%]" : "h-[0px]"
        }`}
      >
        <div className="pt-[60px] px-[38px] md:pt-[90px] md:px-[61px] xl:px-20 xl:pt-[100px] h-screen fixed top-0 left-0 w-full">
          {/* Close X --Start-- */}
          <div
            className={`absolute top-9 right-7 xl:top-[64px] xl:right-[69px] text-[24px] leading-[22px] md:text-[32px] md:leading-[30px] md:top-[45px] md:right-[41px] xl:text-[40px] xl:leading-[37px] cursor-pointer font-northstar-regular z-10 duration-[400ms] delay-150 select-none ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={onClose}
          >
            X
          </div>
          {/* Close X --End-- */}
          <div
            className={`max-w-[950px] flex flex-col h-full pb-8 z-10 text-dark ${
              isOpen
                ? "opacity-100 pointer-events-auto duration-[300ms] delay-100"
                : "opacity-0 pointer-events-none duration-[50ms]"
            }`}
          >
            <h2 className="font-northstar-regular text-[40px] leading-[37px] md:text-[70px] md:leading-[65px] md:max-w-[580px] xl:max-w-full xl:text-[100px] xl:leading-[93px]">
              What does it MEAN TO EVOLVE?
            </h2>
            <p className="font-poppins text-[20px] leading-[30px] mt-[37px] md:text-[30px] md:leading-[45px] md:max-w-[538px] xl:max-w-full xl:text-[32px] xl:leading-[48px] xl:mt-[58px]">
              Unwavering confidence derived through self love emulated through
              conviction and a never-ending hunger for self growth.
            </p>

            {/* <div className="mt-auto md:mt-[70px]">
              <div
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    router.push("/mambaday");
                  }, 500);
                }}
                className="flex flex-col items-center text-center lg:text-left lg:items-start cursor-pointer"
              >
                <p className="text-[20px] leading-[20px] lg:text-[40px] lg:leading-[37px] font-northstar-regular font-bold text-dark">
                  [ EVOLVE-SHORTS ]
                </p>
                <div className="mt-9 lg:mt-[49px] w-[119px]">
                  <Image
                    src={"/images/mamba-folded-mobile-min.png"}
                    alt="mamba-folded-mobile-min"
                    width={753}
                    height={800}
                  />
                </div>
              </div>
            </div> */}
            <LinkDesktop />
            <LinkMobile />
          </div>
        </div>
      </div>
    </Div100vh>
  );
};

export default Menu;

const LinkDesktop = () => {
  return (
    <Link href={"/mambaday"}>
      <a className="hidden lg:inline-block">
        <div className="flex items-center absolute bottom-0 left-0 text-[24px] font-northstar-regular font-bold text-white group bg-dark">
          <div className="w-0 group-hover:w-[333px] duration-200 overflow-hidden whitespace-nowrap">
            <p className="pl-7 ">EVOLVE-SHORTS</p>
          </div>
          <div className="h-[94px] aspect-square flex items-center justify-center text-[35px] group-hover:rotate-180 duration-200 delay-100">
            {">"}
          </div>
        </div>
      </a>
    </Link>
  );
};

const LinkMobile = () => {
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useClickAway(arrowRef, () => {
    setIsOpen(false);
  });
  return (
    <div
      ref={arrowRef}
      className="flex lg:hidden items-center fixed bottom-0 left-0 text-[20px] font-northstar-regular font-bold text-white bg-dark"
    >
      <div
        onClick={() => {
          setIsOpen(false);
          setTimeout(() => {
            router.push("/mambaday");
          }, 200);
        }}
      >
        <div
          className={cx(
            "duration-200 overflow-hidden whitespace-nowrap",
            isOpen ? "w-[calc(100vw-80px)]" : "w-0",
          )}
        >
          <p className="pl-5 h-[80px] flex items-center">EVOLVE-SHORTS</p>
        </div>
      </div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={cx(
          "h-[80px] aspect-square flex items-center justify-center text-[30px] duration-200 delay-100",
          isOpen && "rotate-180",
        )}
      >
        {">"}
      </div>
    </div>
  );
};

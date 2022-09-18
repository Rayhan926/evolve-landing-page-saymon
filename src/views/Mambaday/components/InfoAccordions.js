import React, { useState } from "react";
import { cx } from "../../../utils";
import Accordion from "./Accordion";
import SizingTable from "./SizingTable";

const featuresStyle =
  "text-[13px] leading-[20px] text-off-white [&>li]list-item [&>li]:list-[square] pl-[19px] font-poppins font-normal";

export const accordions = [
  {
    title: "[ MAMBA NUMBERS ]",
    body: (
      <>
        <ul className={cx(featuresStyle, "hidden lg:block")}>
          <li>24/10/8 &nbsp;----------------&nbsp; JERSEY NUMBERS</li>
          <li>20 &nbsp;-----------------------&nbsp; YEARS PLAYED</li>
          <li>5 &nbsp;---------------&nbsp; WORLD CHAMPIONSHIPS</li>
          <li>81 &nbsp;------------&nbsp; POINTS SCORED IN A GAME</li>
          <li>
            18/4 &nbsp;----------&nbsp; ALL STAR &amp; ALL STAR MVP&apos;S
          </li>
          <li>11.01.96 &nbsp;---------------------&nbsp; FIRST GAME</li>
          <li>04.13.16 &nbsp;---------------------&nbsp; LAST GAME</li>
          <li>05.15.21 &nbsp;----&nbsp; HALL OF FAME INDUCTION DATE</li>
          <li>2 &nbsp;----------------------&nbsp; GIANNA BRYANT</li>
          <li>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="translate-y-1"
                viewBox="0 0 16 16"
              >
                <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"></path>
              </svg>{" "}
              &nbsp;---------------------&nbsp; MAMBA FOREVER
            </div>
          </li>
        </ul>
        <ul className={cx(featuresStyle, "lg:hidden")}>
          <li>24/10/8 - JERSEY NUMBERS</li>
          <li>20 - YEARS PLAYED</li>
          <li>5 - WORLD CHAMPIONSHIPS</li>
          <li>81 - POINTS SCORED IN A GAME</li>
          <li>18/4 - ALL STAR &amp; ALL STAR MVP'S</li>
          <li>11.01.96 - FIRST GAME</li>
          <li>04.13.16 - LAST GAME</li>
          <li>05.15.21 - HALL OF FAME INDUCTION DATE</li>
          <li>2 - GIANNA BRYANT</li>
          <li>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"></path>
              </svg>{" "}
              - MAMBA FOREVER
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "[ FEATURES ]",
    body: (
      <ul className={featuresStyle}>
        <li>100% POLY-TEXTURED MESH SHORTS</li>
        <li>LIGHTWEIGHT INSIDE LINING</li>
        <li>RIB KNIT WAISTBAND</li>
        <li>DURABLE NYLON [HIDDEN] ZIPPER POCKETS</li>
        <li>GOLD AGLETS</li>
        <li>[ HIDDEN MESSAGE INSIDE ]</li>
      </ul>
    ),
  },
  {
    title: "[ SHIPPING ]",
    body: (
      <p className="text-[13px] leading-[20px] text-off-white">
        FREE SHIPPING ON ALL ORDERS IN THE USA. Please allow 1-2 business days
        for your order to be processed. International shipping will be
        calculated at checkout. Once shipped you will receive a tracking number
        via email and receive your order in 1-3 business days in the USA.
      </p>
    ),
  },
  {
    title: "[ SIZING ]",
    body: <SizingTable />,
  },
];

const InfoAccordions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickHandler = (index) => {
    console.log(index);
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="info_accordion_container pl-[5%]">
      <div>
        {accordions.map((accordion, i) => (
          <Accordion
            {...accordion}
            isActive={i === activeIndex}
            onClick={() => onClickHandler(i)}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoAccordions;

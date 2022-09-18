import React, { useState } from "react";
import Accordion from "../../Mambaday/components/Accordion";
import { accordions } from "../../Mambaday/components/InfoAccordions";

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickHandler = (index) => {
    console.log(index);
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid flex-[0.4] z-[3] bg-dark -translate-y-px">
      <div className="self-center flex flex-col justify-self-center w-full">
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

export default AccordionSection;

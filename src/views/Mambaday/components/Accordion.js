import React from "react";
import dynamic from "next/dynamic";

const Collapsible = dynamic(() => import("react-collapsible"), { ssr: false });

const Accordion = ({ isActive, title, body, onClick }) => {
  return (
    <div>
      {/* Header --Start-- */}
      <div
        onClick={onClick}
        className="pl-[10%] lg:pl-[15px] p-[15px] text-lg font-northstar-regular text-off-white cursor-pointer"
      >
        {title}
      </div>
      {/* Header --End-- */}

      <Collapsible open={isActive} transitionTime={300}>
        <div className="px-[10%] lg:px-5">{body}</div>
      </Collapsible>
    </div>
  );
};

export default Accordion;

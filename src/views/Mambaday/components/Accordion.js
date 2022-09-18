import Collapsible from "react-collapsible";
import React from "react";

const Accordion = ({ isActive, title, body, onClick }) => {
  return (
    <div>
      {/* Header --Start-- */}
      <div
        onClick={onClick}
        className="p-[15px] text-lg font-northstar-regular text-off-white cursor-pointer"
      >
        {title}
      </div>
      {/* Header --End-- */}

      <Collapsible open={isActive} transitionTime={300}>
        <div className="px-5">{body}</div>
      </Collapsible>
    </div>
  );
};

export default Accordion;

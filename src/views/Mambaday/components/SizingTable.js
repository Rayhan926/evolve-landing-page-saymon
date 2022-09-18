import React from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];
const relaxed = ['26"', '28"', '30"', '32"', '34"'];
const stretched = ['36"', '38"', '40"', '42"', '44"'];
const inseam = ['7"', '7"', '7"', '8"', '8"'];

const tableFullRowStyle =
  "text-center px-[5px] py-1.5 size_table_text border-t-4 border-off-white";

const tableSmlGrid = "grid grid-cols-5 border-t-4 border-off-white";
const tableSmlBox =
  "border-r-4 border-off-white p-[5px] size_table_text last:border-r-0 text-center";

const SizingTable = () => {
  return (
    <div>
      <div className="border-4 border-off-white">
        <div className="grid grid-cols-5">
          {sizes.map((size) => (
            <div
              className="aspect-square bg-gold flex justify-center items-center text-lg font-northstar-regular font-bold text-off-white border-r-4 border-off-white last:border-r-0"
              key={size}
            >
              {size}
            </div>
          ))}
        </div>

        <div className={tableFullRowStyle}>WAiST [RELAXEd]</div>
        <div className={tableSmlGrid}>
          {relaxed.map((e, i) => (
            <div className={tableSmlBox} key={i}>
              {e}
            </div>
          ))}
        </div>

        <div className={tableFullRowStyle}> WAiST [STRETCHEd]</div>
        <div className={tableSmlGrid}>
          {stretched.map((e, i) => (
            <div className={tableSmlBox} key={i}>
              {e}
            </div>
          ))}
        </div>

        <div className={tableFullRowStyle}> iNSEAM </div>
        <div className={tableSmlGrid}>
          {inseam.map((e, i) => (
            <div className={tableSmlBox} key={i}>
              {e}
            </div>
          ))}
        </div>
      </div>
      <p className="text-[13px] leading-[20px] text-off-white">
        *Size measured in inches.
      </p>
    </div>
  );
};

export default SizingTable;

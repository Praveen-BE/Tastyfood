import React from "react";
import { FilterIconSVG } from "../utils/useSvgElements";

const FilterLabel = ({ text, component }) => {
  return (
    <div className="mx-6 my-2">
      <div className="px-[24px] py-[18px] border-2 border-[--filterAndSortTextColor] rounded-[40px]">
        <div className="grid grid-flow-col gap-[8px] items-center">
          <h1 className="w-max font-display text-[40px] font-medium">{text}</h1>
          {component}
        </div>
      </div>
    </div>
  );
};

export default FilterLabel;

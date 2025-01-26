import React from "react";
import { FilterIconSVG } from "../utils/useSvgElements";

const FilterLabel = ({ text, component }) => {
  return (
    <div className="mx-6 lg:mx-1 my-0 lg:my-2">
      <div className="px-[24px] lg:px-[10px] py-[18px] lg:py-[10px] border-2 border-[--filterAndSortTextColor] rounded-[40px]">
        <div className="grid grid-flow-col gap-[8px] items-center">
          <h1 className="w-max font-display text-[40px] lg:text-sm font-medium">
            {text}
          </h1>
          {component}
        </div>
      </div>
    </div>
  );
};

export default FilterLabel;

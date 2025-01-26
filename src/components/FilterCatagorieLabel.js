import classNames from "classnames";
import React from "react";

const FilterCatagorieLabel = ({ isActive, labelName }) => {
  return (
    <div className="h-[5rem] flex justify-start items-center">
      <div
        className={classNames({
          "w-1 h-full bg-red-300": isActive,
        })}
      ></div>
      <div className="ml-4 text-[3rem] lg:text-[2rem] font-display font-bold text-[--primary-text-color] text-center">
        {labelName}
      </div>
    </div>
  );
};

export default FilterCatagorieLabel;

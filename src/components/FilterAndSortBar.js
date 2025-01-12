import React from "react";
import { SortIconSVG } from "../utils/useSvgElements";
import FilterLabel from "./FilterLabel";
import { filterData } from "../utils/constant";

const FilterAndSortBar = () => {
  return (
    <div className="m-0 p-0 w-screen flex ">
      <div className="my-4 ml-2 flex items-center">
        {filterData.map((data) => (
          <FilterLabel
            key={data.text}
            text={data.text}
            component={data.component}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterAndSortBar;

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowTopRightOnSqure,
  CloseXmarkIconSVG,
  FilterSVGIcon,
  SearchIconSVG,
  SortIconSVG,
  SortSVGIcon,
} from "../utils/useSvgElements";
import FilterLabel from "./FilterLabel";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchBar, updateSearchTextValue } from "../utils/pageSlice";
import {
  defaultRestarantList,
  searchRestaurantList,
  sortByRestaurantList,
} from "../utils/restaurantListSlice";
import SortByPage from "./SortByPage";
import FilterPage from "./FilterPage";
import classNames from "classnames";

const FilterAndSortBar = () => {
  const [filterShow, setFilterShow] = useState(false);

  const dispatch = useDispatch();

  const sortByFastDelivery = () => {
    const value = "deliveryTime";
    dispatch(sortByRestaurantList(value));
  };
  const topRatedUpdate = () => {};
  const filterPageShow = () => {
    setFilterShow(!filterShow);
  };
  return (
    <div className="m-0 p-0 w-screen flex lg:ml-16 lg:-mt-16">
      <div className="my-4 lg:my-1 ml-2 flex items-center">
        <span onClick={() => filterPageShow()}>
          <FilterLabel text={"Filter"} component={<FilterSVGIcon />} />
        </span>
        <div
          className={classNames({
            "w-full absolute bg-white px-2": true,
            filterPageEnd: !filterShow,
            block: filterShow,
          })}
        >
          <FilterPage
            filterShow={filterShow}
            filterClose={() => setFilterShow(false)}
          />
        </div>
        <div className="parentSortBy">
          <FilterLabel text={"Sort By"} component={<SortSVGIcon />} />
          <SortByPage />
        </div>
        <div onClick={() => sortByFastDelivery()}>
          <FilterLabel text={"Fast Delivery"} component={null} />
        </div>
      </div>
    </div>
  );
};

export default FilterAndSortBar;

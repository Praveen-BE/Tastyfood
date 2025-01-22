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
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchBar } from "../utils/pageSlice";
import {
  defaultRestarantList,
  searchRestaurantList,
  sortByRestaurantList,
} from "../utils/restaurantListSlice";

const FilterAndSortBar = () => {
  const [showSortBy, setShowSortBy] = useState(true);
  const [searchText, setSearchText] = useState("");
  const searchBar = useSelector((store) => store.page.searchBar);
  const dispatch = useDispatch();
  const closeSearchBarFunction = () => {
    dispatch(closeSearchBar());
    dispatch(defaultRestarantList());
  };
  const searchUpdate = () => {
    dispatch(searchRestaurantList(searchText));
  };
  const sortByUpdateFunction = () => {
    const sortButton = document.querySelector('input[name="SortBy"]:checked');
    const selectValue = sortButton.value;
    // console.log(selectValue);
    dispatch(sortByRestaurantList(selectValue));
  };
  const topRatedUpdate = () => {};
  return (
    <div className="m-0 p-0 w-screen flex ">
      <div className="my-4 ml-2 flex items-center">
        <div>
          <FilterLabel text={"Filter"} component={<FilterSVGIcon />} />
        </div>
        <div>
          <span onClick={() => setShowSortBy(!showSortBy)}>
            {showSortBy ? (
              <FilterLabel text={"Sort By"} component={<SortSVGIcon />} />
            ) : (
              <FilterLabel
                text={""}
                component={
                  <div className="px-14">
                    <CloseXmarkIconSVG />
                  </div>
                }
              />
            )}
          </span>
          <form
            className={classNames({
              "ml-7 mt-1 absolute bg-[--color5] p-4 rounded-3xl z-50": true,
              hidden: showSortBy,
            })}
          >
            <div className="m-4">
              <input
                className="size-10 font-bold text-[--primary-text-color] cursor-pointer checked:bg-[--primary-text-color] transition-colors"
                type="radio"
                name="SortBy"
                value="default"
              />
              <label
                className="ml-4 text-[3rem] font-display font-bold text-[--primary-text-color] text-center"
                for="default"
              >
                {"Relevance (Default)"}
              </label>
            </div>
            <div className="m-4">
              <input
                className="size-10"
                type="radio"
                name="SortBy"
                value="deliveryTime"
              />
              <label
                className="ml-4 text-[3rem] font-display font-bold text-[--primary-text-color] text-center"
                for="deliveryTime"
              >
                Delivery Time
              </label>
            </div>
            <div className="m-4">
              <input
                className="size-10"
                type="radio"
                name="SortBy"
                value="rating"
              />
              <label
                className="ml-4 text-[3rem] font-display font-bold text-[--primary-text-color] text-center"
                for="rating"
              >
                Rating
              </label>
            </div>
            <div className="m-4">
              <input
                className="size-10"
                type="radio"
                name="SortBy"
                value="lowToHigh"
              />
              <label
                className="ml-4 text-[3rem] font-display font-bold text-[--primary-text-color] text-center"
                for="lowToHigh"
              >
                Cost: Low to High
              </label>
            </div>
            <div className="m-4">
              <input
                className="size-10"
                type="radio"
                name="SortBy"
                value="highToLow"
              />
              <label
                className="ml-4 text-[3rem] font-display font-bold text-[--primary-text-color] text-center"
                for="highToLow"
              >
                Cost: High to Low
              </label>
            </div>
            <h1
              onClick={() => sortByUpdateFunction()}
              className="flex justify-center items-center ml-4 text-[3rem] font-display font-bold text-red-600 text-center"
            >
              Apply
            </h1>
          </form>
        </div>
        <div>
          <FilterLabel text={"Fast Delivery"} component={null} />
        </div>
        <div>
          <FilterLabel text={"new"} component={null} />
        </div>
      </div>
      {searchBar && (
        <div className="absolute m-0 ">
          <div className="flex p-2 bg-green-200 shadow-md">
            <input
              className="ml-10 px-10 py-4 w-[43rem] text-[3rem] text-[--primary-text-color] font-display border-2 border-gray-600 rounded-l-3xl"
              type="text"
              name="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search your beloved meals...!"
            />
            <div
              for="search"
              onClick={() => searchUpdate()}
              className="flex justify-center items-center w-[7rem] border-2 border-gray-600 rounded-r-3xl bg-white"
            >
              <span className="w-20">
                <SearchIconSVG />
              </span>
            </div>
            <div
              onClick={() => closeSearchBarFunction()}
              className="flex justify-center items-center ml-2 w-[7rem] border-2 border-gray-600 rounded-full bg-white"
            >
              <span className="">
                <CloseXmarkIconSVG />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterAndSortBar;

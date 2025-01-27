import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchBar, updateSearchTextValue } from "../utils/pageSlice";
import {
  defaultRestarantList,
  searchRestaurantList,
} from "../utils/restaurantListSlice";
import { CloseXmarkIconSVG, SearchIconSVG } from "../utils/useSvgElements";
import classNames from "classnames";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((store) => store.page.searchText);
  const searchBar = useSelector((store) => store.page.searchBar);
  const searchValueUpdate = (value) => {
    dispatch(updateSearchTextValue(value));
  };
  const closeSearchBarFunction = () => {
    dispatch(closeSearchBar());
    dispatch(defaultRestarantList());
  };
  const searchUpdate = () => {
    dispatch(searchRestaurantList(searchText));
  };
  return (
    <>
      <div
        className={classNames({
          "lg:block absolute lg:relative m-0 w-[60rem] -mt-32 rounded-2xl md:ml-4 lg:ml-96 lg:-mt-14": true,
          hidden: !searchBar,
        })}
      >
        <div className="flex p-2 w-[60rem] md:w-[58rem]  lg:w-[20rem] lg:p-0 bg-green-200 lg:bg-white shadow-md lg:shadow-none">
          <input
            className="ml-10 px-10 lg:px-5 py-4 lg:py-1
             w-[80rem] sm:w-[80rem] md:w-[50rem] lg:w-[20rem] text-[3rem] lg:text-[1rem] text-[--primary-text-color] font-display border-2 border-gray-600 rounded-l-3xl"
            type="text"
            name="search"
            value={searchText}
            onChange={(e) => searchValueUpdate(e.target.value)}
            placeholder="Search your beloved meals...!"
          />
          <div
            htmlFor="search"
            onClick={() => searchUpdate()}
            className="flex justify-center items-center w-[7rem] lg:w-[3rem] border-2 border-gray-600 rounded-r-3xl bg-white"
          >
            <span className="w-20 lg:w-10">
              <SearchIconSVG />
            </span>
          </div>
          <div
            onClick={() => closeSearchBarFunction()}
            className="flex justify-center items-center ml-2
             lg:w-[3rem] border-2 border-gray-600 rounded-full bg-white lg:hidden
             "
          >
            <span className="lg:hidden">
              <CloseXmarkIconSVG />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

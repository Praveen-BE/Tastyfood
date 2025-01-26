import React from "react";
import { useDispatch } from "react-redux";
import { sortByRestaurantList } from "../utils/restaurantListSlice";
import RadioInputLabel from "./RadioInputLabel";

const SortByPage = () => {
  return (
    <div className="childSortBy absolute z-30 bg-white p-6 rounded-3xl">
      <InnerSortByValue />
    </div>
  );
};

export default SortByPage;

export const InnerSortByValue = () => {
  const dispatch = useDispatch();
  const sortByUpdateFunction = () => {
    const sortButton = document.querySelector('input[name="SortBy"]:checked');
    const selectValue = sortButton.value;
    // console.log(selectValue);
    dispatch(sortByRestaurantList(selectValue));
  };
  return (
    <form className="">
      <RadioInputLabel
        nameValue={"default"}
        labelValue={"Relevance (Default)"}
        name={"SortBy"}
      />
      <RadioInputLabel
        nameValue={"deliveryTime"}
        labelValue={"deliveryTime"}
        name={"SortBy"}
      />
      <RadioInputLabel
        nameValue={"rating"}
        labelValue={"rating"}
        name={"SortBy"}
      />
      <h1
        onClick={() => sortByUpdateFunction()}
        className="flex justify-center items-center ml-4 text-[3rem] font-display font-bold text-red-600 text-center"
      >
        Apply
      </h1>
    </form>
  );
};

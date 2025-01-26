import React from "react";
import { useDispatch } from "react-redux";
import { filterByRestaurantList } from "../utils/restaurantListSlice";
import RadioInputLabel from "./RadioInputLabel";

const FilterRating = () => {
  const dispatch = useDispatch();
  const FilterByRatingFunction = () => {
    const selectButton = document.querySelector(
      'input[name="ratingFilter"]:checked'
    );
    const selectValue = selectButton.value;
    dispatch(filterByRestaurantList(selectValue));
  };
  return (
    <form className="">
      <RadioInputLabel
        nameValue={"topRated"}
        labelValue={"Top Rated"}
        name={"ratingFilter"}
      />
      <RadioInputLabel
        nameValue={"4andAbove"}
        labelValue={"4 and Above"}
        name={"ratingFilter"}
      />
      <RadioInputLabel
        nameValue={"3tobelow4"}
        labelValue={"3 to below 4"}
        name={"ratingFilter"}
      />
      <RadioInputLabel
        nameValue={"below3"}
        labelValue={"Below 3"}
        name={"ratingFilter"}
      />
      <h1
        onClick={() => FilterByRatingFunction()}
        className="flex justify-center items-center ml-4 text-[3rem] font-display font-bold text-red-600 text-center"
      >
        Apply
      </h1>
    </form>
  );
};

export default FilterRating;

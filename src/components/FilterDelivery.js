import React from "react";
import RadioInputLabel from "./RadioInputLabel";
import { useDispatch } from "react-redux";
import {
  filterByRestaurantList,
  sortByRestaurantList,
} from "../utils/restaurantListSlice";

const FilterDelivery = () => {
  const dispatch = useDispatch();
  const filterDeliveryUpdate = () => {
    const selectButton = document.querySelector(
      'input[name="delivery"]:checked'
    );
    const selectValue = selectButton.value;
    dispatch(sortByRestaurantList(selectValue));
  };
  return (
    <form className="">
      <RadioInputLabel
        nameValue={"deliveryTime"}
        labelValue={"Fast Delivery"}
        name={"delivery"}
      />
      <h1
        onClick={() => filterDeliveryUpdate()}
        className="flex justify-center items-center ml-4 text-[3rem] font-display font-bold text-red-600 text-center"
      >
        Apply
      </h1>
    </form>
  );
};

export default FilterDelivery;

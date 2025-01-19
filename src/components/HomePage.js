import React from "react";
import React, { useEffect, useState } from "react";
import resList from "../utils/mockData";
import FilterAndSortBar from "./FilterAndSortBar";
import RestaurantListPage from "./RestaurantListPage";
import { useDispatch, useSelector } from "react-redux";
import {
  addRestaurants,
  againAddRestaurants,
} from "../utils/restaurantListSlice";
import { addPage } from "../utils/pageSlice";

const HomePage = () => {
  const pageNo = useSelector((store) => store.page.pageNo);
  const restaurants = useSelector((store) => store.restaurant.restarantList);
  // console.log(pageNo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (restaurants == null) {
      restaurantListFetch();
    }
    // AddRestroFetch();
  }, []);
  // useEffect(() => {
  // restaurantListFetch();
  //   AddRestroFetch();
  // }, []);

  const restaurantListFetch = async () => {
    // console.log(pageNo);
    const data = await fetch("http://localhost:3333/restuarantList/" + pageNo);
    const json = await data.json();
    // console.log(json);
    const restaurant =
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    dispatch(addRestaurants(restaurant));
    dispatch(addPage(pageNo + 1));
  };

  const AddRestroFetch = async (nextpageNo) => {
    // console.log(nextpageNo);
    const data = await fetch(
      "http://localhost:3333/restuarantList/" + nextpageNo
    );
    const json = await data.json();
    // console.log(json);
    const restaurant =
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    dispatch(againAddRestaurants(restaurant));
    dispatch(addPage(pageNo + 1));
  };

  return (
    <div className="pb-40">
      <FilterAndSortBar />
      <RestaurantListPage />
      <div className="w-full p-2 flex justify-center">
        <h1
          className="px-6 py-3 pb-5 text-white text-center text-[50px] rounded-[50px] bg-[--filterAndSortTextColor]"
          onClick={() => AddRestroFetch(pageNo)}
        >
          Show More
        </h1>
      </div>
    </div>
  );
};

export default HomePage;

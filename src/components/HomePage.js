import React, { lazy, Suspense } from "react";
import React, { useEffect, useState } from "react";
import resList from "../utils/mockData";
import FilterAndSortBar from "./FilterAndSortBar";
// import RestaurantListPage from "./RestaurantListPage";
import { useDispatch, useSelector } from "react-redux";
import {
  addRestaurants,
  againAddRestaurants,
  defaultRestarantList,
  searchRestaurantList,
} from "../utils/restaurantListSlice";
import { addPage } from "../utils/pageSlice";
import ShimmerResListPage from "./ShimmerResListPage";
const RestaurantListPage = lazy(() => import("./RestaurantListPage"));
const HomePage = () => {
  const pageNo = useSelector((store) => store.page.pageNo);
  const searchBar = useSelector((store) => store.page.searchBar);
  const restaurants = useSelector((store) => store.restaurant.restarantList);
  const searchText = useSelector((store) => store.page.searchText);
  const [noMore, setNoMore] = useState(false);
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
    dispatch(defaultRestarantList());
    dispatch(addPage(pageNo + 1));
  };

  const AddRestroFetch = async (nextpageNo) => {
    // console.log(nextpageNo);
    if (nextpageNo <= 25 && nextpageNo > 0) {
      const data = await fetch(
        "http://localhost:3333/restuarantList/" + nextpageNo
      );
      const json = await data.json();
      // console.log(json);
      const restaurant =
        json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      dispatch(againAddRestaurants(restaurant));
      if (searchBar) {
        dispatch(searchRestaurantList(searchText));
      } else {
        dispatch(defaultRestarantList());
      }
      dispatch(addPage(pageNo + 1));
    } else {
      setNoMore(true);
      setTimeout(function () {
        setNoMore(false);
      }, 2000);
    }
  };

  return (
    <div className="pb-40">
      {noMore && (
        <>
          <div className="fixed top-[2rem] left-[50%] translate-x-[-50%] z-50 bg-gray-800 rounded-full">
            <h1 className="bg-[--filterAndSortTextColor] text-white px-10 py-5 font-semibold text-[3rem] rounded-full">
              Currently Can't Update No More Pages
            </h1>
          </div>
        </>
      )}
      <FilterAndSortBar />
      <Suspense fallback={<ShimmerResListPage />}>
        <RestaurantListPage />
      </Suspense>
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

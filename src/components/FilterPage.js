import React, { useState } from "react";
import SortByPage, { InnerSortByValue } from "./SortByPage";
import classNames from "classnames";
import { CloseXmarkIconSVG } from "../utils/useSvgElements";
import FilterCatagorieLabel from "./FilterCatagorieLabel";
import FilterRating from "./FilterRating";
import { useDispatch } from "react-redux";
import { sortByRestaurantList } from "../utils/restaurantListSlice";
import FilterDelivery from "./FilterDelivery";

const FilterPage = ({ filterShow, filterClose }) => {
  const [sortShow, setSortShow] = useState(false);
  const [ratingShow, setRatingShow] = useState(false);
  const [deliveryShow, setDeliverShow] = useState(false);
  const dispatch = useDispatch();
  const setNavLabelInFilterPage = (value) => {
    switch (value) {
      case 1:
        {
          setSortShow(true);
          setRatingShow(false);
          setDeliverShow(false);
        }
        break;
      case 2:
        {
          setSortShow(false);
          setRatingShow(true);
          setDeliverShow(false);
        }
        break;
      case 3:
        {
          setSortShow(false);
          setRatingShow(false);
          setDeliverShow(true);
        }
        break;
      default: {
        setSortShow(false);
        setRatingShow(false);
        setDeliverShow(false);
      }
    }
  };
  return (
    <div
      className={classNames({
        "fixed flex flex-col px-5 pt-5 z-40 rounded-t-[3rem] bg-white border-2 border-gray-400": true,
        " w-[60rem] h-[65rem] lg:w-[60rem] lg:h-[40rem]": filterShow,
        "bottom-0 lg:bottom-0": filterShow,
        "-bottom-[80rem]": !filterShow,
        filterPageEnd: !filterShow,
        "w-0 h-0 hidden": !filterShow,
      })}
    >
      <div className="w-screen flex justify-between">
        <h1 className="text-[3rem] font-black md:text-[3rem] font-display text-[--primary-text-color]">
          Filter
        </h1>{" "}
        <span className="mr-32 lg:mr-60" onClick={filterClose}>
          <CloseXmarkIconSVG />
        </span>
      </div>
      <div className="flex h-full">
        <div className="flex h-full flex-col w-4/12 overflow-scroll">
          <div
            onClick={() => setNavLabelInFilterPage(1)}
            className="font-display h-[4rem]"
          >
            <FilterCatagorieLabel isActive={sortShow} labelName={"Sort"} />
          </div>
          <div
            onClick={() => setNavLabelInFilterPage(2)}
            className="font-display h-[4rem]"
          >
            <FilterCatagorieLabel isActive={ratingShow} labelName={"Rating"} />
          </div>
          <div
            onClick={() => setNavLabelInFilterPage(3)}
            className="font-display h-[4rem]"
          >
            <FilterCatagorieLabel
              isActive={deliveryShow}
              labelName={"Delivery"}
            />
          </div>
        </div>
        <div className="h-full w-8/12 overflow-scroll">
          <>{sortShow ? <InnerSortByValue /> : ""}</>
          <>{ratingShow ? <FilterRating /> : ""}</>
          <>{deliveryShow ? <FilterDelivery /> : ""}</>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;

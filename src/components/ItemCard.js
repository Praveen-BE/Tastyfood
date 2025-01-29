import React, { useState } from "react";
import { CDN_URL } from "../utils/constant";
import classNames from "classnames";
import { BigStarIcon, StarIcon } from "../utils/useSvgElements";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../utils/cartSlice";
import {
  addItemAndPriceAndCount,
  decreaseItemCount,
  increaseItemCount,
  removeItemAndPriceAndCount,
} from "../utils/priceSlice";
import { errorMinusFalse, errorMinusTrue } from "../utils/errorSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageShimmer from "./ImageShimmer";

const ItemCard = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { data } = props;
  const [more, setMore] = useState(false);
  const { name, defaultPrice, ratings, description, imageId, price } =
    data?.card?.info;
  // const describeTextSelect =
  const showMoreText = () => {
    setMore(true);
  };
  return (
    <div className="mx-4 pt-24 pb-28 lg:pt-10 lg:pb-10 flex">
      <div className="w-6/12 pl-4">
        <img
          src="https://www.pngitem.com/pimgs/m/151-1515150_veg-icon-png-circle-transparent-png.png"
          alt="vegIcon"
          className="w-[3rem] lg:w-[2rem]"
        />
        <h1 className="font-display font-black text-[--primary-text-color] text-[3.5rem] lg:text-[2rem]">
          {name}
        </h1>
        <h2 className="font-display text-[3rem] lg:text-[2rem]">
          ₹ {defaultPrice ? defaultPrice / 100 : price / 100}
        </h2>
        <h3 className="font-display text-[3rem] lg:text-[2rem] flex items-center  text-[--primary-text-color]">
          <BigStarIcon color={"red"} />
          {ratings?.aggregatedRating?.rating} (
          {ratings?.aggregatedRating?.ratingCountV2})
        </h3>
        <div className="flex">
          <p
            onClick={() => showMoreText()}
            className={classNames({
              "describeText font-display text-[2.5rem] lg:text-[2rem] w-full text-wrap text-ellipsis  text-[--primary-text-color]": true,
              "line-clamp-2": !more,
            })}
          >
            {description}
          </p>
          <p className="flex items-end">
            {more ? (
              ""
            ) : (
              <span
                onClick={() => showMoreText()}
                className="font-display text-[2.5rem] lg:text-[2rem] mr-4 font-black text-[--primary-text-color]"
              >
                more
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="w-6/12 mr-8 pr-4">
        <div className="relative w-full h-[28rem] lg:h-[20rem] overflow-hidden rounded-[3rem]">
          <LazyLoadImage
            className={classNames({ "w-full absolute": true, hidden: !loaded })}
            src={CDN_URL + imageId}
            alt={name + "Image"}
            onLoad={() => setLoaded(true)}
            // onLoad={() => console.log("Hello")}
          />
          {!loaded && (
            <div className="w-full h-full flex justify-center items-center animate-pulse rounded-3xl shadow-2xl bg-green-100">
              <div className=" ">
                <div
                  className="absolute left-[1rem] bottom-[1rem] 
                w-0 h-0 border-l-[6rem] 
    border-r-[6rem] border-b-[12rem] border-l-transparent 
    border-r-transparent border-b-red-200"
                ></div>
                <div
                  className="absolute left-[6rem] bottom-[1rem] 
                w-0 h-0 border-l-[6rem] 
    border-r-[6rem] border-b-[12rem] border-l-transparent 
    border-r-transparent border-b-red-200"
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemCard;

export const ItemCardAdd = (ItemCard) => {
  const dispatch = useDispatch();
  const priceObject = useSelector((store) => store?.price?.itemsPrice);
  return (props) => {
    const { data } = props;
    const { id, defaultPrice, price } = data?.card?.info;
    const tempObject = { price: defaultPrice / 100 || price / 100, count: 1 };
    const cartAddItem = () => {
      dispatch(addCartItem(data));
      dispatch(addItemAndPriceAndCount({ key: id, value: tempObject }));
    };
    const stringId = id.toString();
    const decrease = () => {
      if (priceObject[stringId].count == 1) {
        dispatch(errorMinusTrue());
        setTimeout(function () {
          dispatch(errorMinusFalse());
        }, 1000);
      } else {
        dispatch(decreaseItemCount(id));
      }
    };
    const increase = () => {
      dispatch(increaseItemCount(id));
    };
    return (
      <div>
        <div className="relative border-2 border-[--bottom-border-color]">
          <ItemCard {...props} />
          {stringId in priceObject ? (
            <button
              className="px-0 py-0 absolute 
            top-[30rem] right-[7rem] lg:top-[18rem] lg:right-[5.5rem]
           bg-white text-[--add-text-color] text-[3rem] lg:text-[2rem]
           text-center font-black rounded-3xl border-[--add-text-color] border-2"
            >
              <div className="w-[20rem] lg:w-[18rem] flex justify-between items-center">
                <div
                  onClick={() => decrease()}
                  className="mr-0 w-[7rem] py-5 bg-[--primary-text-color] rounded-l-3xl"
                >
                  -
                </div>
                <h1 className="w-[6rem]">{priceObject[stringId]?.count}</h1>
                <div
                  onClick={() => increase()}
                  className="ml-0 w-[7rem] py-5 flex justify-center bg-[--primary-text-color] rounded-r-3xl"
                >
                  +
                </div>
              </div>
            </button>
          ) : (
            <button
              onClick={() => cartAddItem()}
              className="hover: px-28 py-5 absolute top-[30rem] lg:top-[18rem] right-[6.75rem] lg:right-[5.5rem]
           bg-white text-[--add-text-color] text-[3rem] lg:text-[2rem]
           text-center font-black rounded-3xl border-[--add-text-color] border-2"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    );
  };
};

export const ItemCartRemove = (ItemCard) => {
  const dispatch = useDispatch();
  return (props) => {
    const { data } = props;
    const { id } = data?.card?.info;
    const cartRemoveItem = () => {
      dispatch(removeCartItem(data));
      dispatch(removeItemAndPriceAndCount({ key: id }));
    };
    return (
      <div>
        <div className="relative border-2 border-[--bottom-border-color]">
          <ItemCard {...props} />
          <button
            onClick={() => cartRemoveItem()}
            className="px-20 py-5 absolute top-[30rem] right-[6.5rem] lg:top-[18rem] lg:right-[6.5rem]
           bg-white text-[--add-text-color] text-[3rem] lg:text-[2rem]
           text-center font-black rounded-3xl border-[--add-text-color] border-2"
          >
            Remove
          </button>
        </div>
      </div>
    );
  };
};

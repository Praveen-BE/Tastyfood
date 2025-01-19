import React, { useState } from "react";
import { CDN_URL } from "../utils/constant";
import classNames from "classnames";
import { StarIcon } from "../utils/useSvgElements";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../utils/cartSlice";
import {
  addItemAndPriceAndCount,
  decreaseItemCount,
  increaseItemCount,
  removeItemAndPriceAndCount,
} from "../utils/priceSlice";
import { errorMinusFalse, errorMinusTrue } from "../utils/errorSlice";

const ItemCard = (props) => {
  const { data } = props;
  const [more, setMore] = useState(false);
  const { name, defaultPrice, ratings, description, imageId, price } =
    data?.card?.info;
  // const describeTextSelect =
  const showMoreText = () => {
    setMore(true);
  };
  return (
    <div className="mx-4 pt-24 pb-28 flex">
      <div className="w-6/12 pl-4">
        <img
          src="https://www.pngitem.com/pimgs/m/151-1515150_veg-icon-png-circle-transparent-png.png"
          alt="vegIcon"
          className="w-[3rem]"
        />
        <h1 className="font-display font-black text-[--primary-text-color] text-[3.5rem]">
          {name}
        </h1>
        <h2 className="font-display text-[3rem]">
          ₹ {defaultPrice ? defaultPrice / 100 : price / 100}
        </h2>
        <h3 className="font-display text-[3rem] flex items-center  text-[--primary-text-color]">
          <StarIcon color={"red"} />
          {ratings?.aggregatedRating?.rating} (
          {ratings?.aggregatedRating?.ratingCountV2})
        </h3>
        <div className="flex">
          <p
            onClick={() => showMoreText()}
            className={classNames({
              "describeText font-display text-[2.5rem] w-full text-wrap text-ellipsis  text-[--primary-text-color]": true,
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
                className="font-display text-[2.5rem] mr-4 font-black text-[--primary-text-color]"
              >
                more
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="w-6/12 mr-8 pr-4">
        <img
          className="w-full rounded-[3rem]  h-[28rem] "
          src={CDN_URL + imageId}
          alt={name + "Image"}
        />
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
    // console.log(stringId);
    // const value = ObjectValue.hasOwnProperty(stringId);
    // console.log(value);
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
              className="px-0 py-0 absolute top-[30rem] right-[6.75rem]
           bg-white text-[--add-text-color] text-[3rem] 
           text-center font-black rounded-3xl border-[--add-text-color] border-2"
            >
              <div className="w-[20rem] flex justify-between items-center">
                <div
                  onClick={() => decrease()}
                  className="mr-0 px-10 py-5 bg-[--primary-text-color] rounded-l-3xl"
                >
                  -
                </div>
                <h1 className="w-10">{priceObject[stringId]?.count}</h1>
                <div
                  onClick={() => increase()}
                  className="ml-0 px-10 py-5 bg-[--primary-text-color] rounded-r-3xl"
                >
                  +
                </div>
              </div>
            </button>
          ) : (
            <button
              onClick={() => cartAddItem()}
              className="px-28 py-5 absolute top-[30rem] right-[6.75rem]
           bg-white text-[--add-text-color] text-[3rem] 
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
            className="px-20 py-5 absolute top-[30rem] right-[6.5rem]
           bg-white text-[--add-text-color] text-[3rem] 
           text-center font-black rounded-3xl border-[--add-text-color] border-2"
          >
            Remove
          </button>
        </div>
      </div>
    );
  };
};

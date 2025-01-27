import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorMinusFalse, errorMinusTrue } from "../utils/errorSlice";
import { decreaseItemCount, increaseItemCount } from "../utils/priceSlice";
import { formatToINR } from "../utils/formatINR";

// const formatToINR = (number) => {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   }).format(number);
// };

const CartItemCard = ({ data }) => {
  // const [count, setCount] = useState(1);
  const priceObject = useSelector((store) => store?.price?.itemsPrice);
  const dispatch = useDispatch();
  // console.log(data);
  const { id } = data?.card?.info;
  const decrease = () => {
    if (priceObject[id].count == 1) {
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
  const { name, price, defaultPrice } = data?.card?.info;
  return (
    <div>
      <div className="m-0 p-4 lg:mr-[10rem] lg:ml-[10rem] flex justify-between">
        <div>
          <img
            src="https://www.pngitem.com/pimgs/m/151-1515150_veg-icon-png-circle-transparent-png.png"
            alt="vegIcon"
            className="w-[3rem] lg:w-[2rem]"
          />
        </div>
        <h1 className="text-[2rem] lg:ml-[1rem] w-3/6 lg:text-[1.5rem] overflow-hidden">
          {name}
        </h1>
        <div className="flex justify-center items-center w-[15rem]">
          <button
            onClick={() => decrease()}
            className="flex items-center justify-center text-[3rem] lg:text-[1.5rem] text-center w-[4rem] lg:w-[3rem] h-[4rem] lg:h-[3rem] rounded-lg bg-[--primary-text-color] text-white mr-5 lg:mr-1"
          >
            -
          </button>
          <h1 className="w-[5rem] lg:w-[3rem] h-[4rem] lg:h-[2rem] text-center text-[2.5rem] lg:text-[1.5rem]">
            {priceObject[id]?.count}
          </h1>
          <button
            onClick={() => increase()}
            className="flex items-center justify-center text-[3rem] lg:text-[1.5rem] w-[4rem] lg:w-[3rem] h-[4rem] lg:h-[3rem] rounded-lg bg-[--primary-text-color] text-white ml-5 lg:ml-1"
          >
            +
          </button>
        </div>
        <div className="w-[15rem] flex justify-end">
          {defaultPrice ? (
            <h1 className="text-[2.5rem] lg:text-[2rem]">
              Rs. {formatToINR((priceObject[id].count * defaultPrice) / 100)}
            </h1>
          ) : (
            <h1 className="text-[2.5rem]">
              Rs. {formatToINR((priceObject[id].count * price) / 100)}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

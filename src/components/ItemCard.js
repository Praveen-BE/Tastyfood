import React, { useState } from "react";
import { CDN_URL } from "../utils/constant";
import classNames from "classnames";
import { StarIcon } from "../utils/useSvgElements";

const ItemCard = (props) => {
  const { data } = props;
  const [more, setMore] = useState(false);
  const { name, defaultPrice, ratings, description, imageId } =
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
        <h2 className="font-display text-[3rem]">₹ {defaultPrice / 100}</h2>
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

export const ItemCardAdd = (ItemCard) => {
  return (props) => {
    return (
      <div>
        <div className="relative border-2 border-[--bottom-border-color]">
          <ItemCard {...props} />
          <h1
            className="px-28 py-5 absolute top-[30rem] right-[6.75rem]
           bg-white text-[--add-text-color] text-[3rem] 
           text-center font-black rounded-3xl border-[--add-text-color] border-2"
          >
            ADD
          </h1>
        </div>
      </div>
    );
  };
};

export default ItemCard;

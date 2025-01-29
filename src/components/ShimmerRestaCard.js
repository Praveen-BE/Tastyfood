import React from "react";
import {
  LineShimmerFull,
  LineShimmerHalf,
  RestaurantCardShimmerHalfLine,
  RestaurantCardShimmerLine,
  ShimmerImageCard,
} from "./Shimmer";
import ImageShimmer from "./ImageShimmer";

const ShimmerRestaCard = () => {
  return (
    <div className="w-[23rem] lg:w-[11rem] h-[49.5rem] lg:h-[22rem] rounded-[32px] mt-5 ml-4 lg:ml-2 flex flex-col p-4 lg:p-2 bg-red-100 animate-pulse z-0">
      <div className="relative lg:mt-4 w-full lg:w-[98%] h-[30rem] lg:h-[11.25rem] overflow-hidden rounded-3xl">
        <div className="bg-green-50 ShimmerEffect"></div>
        <div
          className="absolute left-[1rem] bottom-[1rem] w-0 h-0 border-l-[5rem] 
    border-r-[5rem] border-b-[10rem] lg:border-l-[3rem] 
    lg:border-r-[3rem] lg:border-b-[6rem] border-l-transparent 
    border-r-transparent border-b-red-100"
        ></div>
        <div
          className="absolute left-[9rem] lg:left-[3rem] bottom-[1rem] w-0 h-0 border-l-[3rem] 
    border-r-[3rem] border-b-[8rem] lg:border-l-[3rem] 
    lg:border-r-[3rem] border-l-transparent 
    border-r-transparent border-b-red-100"
        ></div>
      </div>

      <div className="mt-2 lg:mt-0">
        <RestaurantCardShimmerLine />
        <RestaurantCardShimmerLine />
        <RestaurantCardShimmerLine />
        <RestaurantCardShimmerHalfLine />
      </div>
    </div>
  );
};

export default ShimmerRestaCard;

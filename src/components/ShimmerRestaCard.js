import React from "react";
import Shimmer, { LineShimmerFull, LineShimmerHalf } from "./Shimmer";

const ShimmerRestaCard = () => {
  return (
    <div className="w-[410px] h-[500px] rounded-[32px] ml-4 flex flex-col p-4 bg-red-50">
      <Shimmer />
      <LineShimmerFull />
      <LineShimmerFull />
      <LineShimmerHalf />
    </div>
  );
};

export default ShimmerRestaCard;

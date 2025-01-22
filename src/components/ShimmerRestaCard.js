import React from "react";
import { LineShimmerFull, LineShimmerHalf, ShimmerImageCard } from "./Shimmer";

const ShimmerRestaCard = () => {
  return (
    <div className="w-[27rem] h-[49.5rem] rounded-[32px] mt-5 ml-4 flex flex-col p-4 bg-red-100 animate-pulse z-0">
      <ShimmerImageCard />
      <div className="mt-2">
        <LineShimmerFull />
        <LineShimmerFull />
        <LineShimmerFull />
        <LineShimmerHalf />
      </div>
    </div>
  );
};

export default ShimmerRestaCard;

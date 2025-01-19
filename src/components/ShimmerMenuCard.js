import React from "react";
import Shimmer, { LineShimmerFull, LineShimmerHalf } from "./Shimmer";

const ShimmerMenuCard = () => {
  return (
    <div className="m-6 flex bg-red-100">
      <div className="mx-6 my-2 w-7/12">
        <LineShimmerFull />
        <LineShimmerFull />
        <LineShimmerFull />
        <LineShimmerHalf />
      </div>
      <div className="my-6 mr-6 w-4/12">
        <Shimmer />
      </div>
    </div>
  );
};

export default ShimmerMenuCard;

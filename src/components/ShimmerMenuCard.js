import React from "react";
import Shimmer, { LineShimmerFull, LineShimmerHalf } from "./Shimmer";
import ImageShimmer from "./ImageShimmer";

const ShimmerMenuCard = () => {
  return (
    <div className="m-6 lg:m-2 flex bg-red-100">
      <div className="mx-6 my-2 w-7/12">
        <LineShimmerFull />
        <LineShimmerFull />
        <LineShimmerFull />
        <LineShimmerFull />
        <LineShimmerHalf />
      </div>
      <div className="my-6 mr-6 w-4/12">
        <Shimmer />
        <ImageShimmer />
      </div>
    </div>
  );
};

export default ShimmerMenuCard;

import React from "react";
import { LineShimmerFull } from "./Shimmer";
import ShimmerMenuCard from "./ShimmerMenuCard";

const ShimmerMenuPage = () => {
  return (
    <div className="mx-4 w-full flex justify-center">
      <div className="w-full lg:w-7/12">
        <div className="flex justify-center items-center">
          <div className="w-[20rem] px-2 py-2 bg-red-100">
            <LineShimmerFull />
          </div>
        </div>
        <div className="flex justify-center items-center mt-3 px-2 py-2 bg-red-100">
          <LineShimmerFull />
        </div>
        <ShimmerMenuCard />
        <ShimmerMenuCard />
        <ShimmerMenuCard />
        <ShimmerMenuCard />
      </div>
    </div>
  );
};

export default ShimmerMenuPage;

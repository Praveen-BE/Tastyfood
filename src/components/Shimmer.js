import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="w-full h-[16rem] overflow-hidden">
        <div className="bg-green-50 ShimmerEffect"></div>
      </div>
    </>
  );
};

export default Shimmer;

export const LineShimmerFull = () => {
  return (
    <>
      <div className="mt-4 w-full h-[3rem] bg-green-50 flex items-center">
        <div className="m-5 w-full h-[1rem] ShimmerEffect"></div>
      </div>
    </>
  );
};

export const LineShimmerHalf = () => {
  return (
    <>
      <div className="mt-4 w-6/12 h-[3rem] bg-green-50 flex items-center">
        <div className="m-5 w-full h-[1rem] ShimmerEffectSlow"></div>
      </div>
    </>
  );
};

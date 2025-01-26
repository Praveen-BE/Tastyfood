import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="w-full lg:w-11/12 h-[14rem] lg:h-11/12 overflow-hidden rounded-3xl">
        <div className="bg-green-50 ShimmerEffect"></div>
      </div>
    </>
  );
};

export default Shimmer;

export const ShimmerImageCard = () => {
  return (
    <div className="w-full lg:w-[98%] h-[30rem] lg:h-[16rem] overflow-hidden rounded-3xl">
      <div className="bg-green-50 ShimmerEffect"></div>
    </div>
  );
};

export const LineShimmerFull = () => {
  return (
    <>
      <div className="my-4 w-full lg:w-[98%] h-[3rem] bg-green-50 flex items-center rounded-3xl">
        <div className="m-5 w-full h-[1rem] ShimmerEffect"></div>
      </div>
    </>
  );
};

export const LineShimmerHalf = () => {
  return (
    <>
      <div className="mt-5 w-6/12 lg:w-[70%] h-[3rem] bg-green-50 flex items-center rounded-3xl">
        <div className="m-5 w-full h-[1rem] ShimmerEffectSlow"></div>
      </div>
    </>
  );
};

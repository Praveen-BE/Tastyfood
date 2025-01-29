import React from "react";

const ImageShimmer = () => {
  return (
    <div className="relative w-full rounded-[32px] -z-20 bg-red-100 animate-pulse">
      <div
        className="absolute left-[1rem] bottom-[1rem] w-0 h-0 border-l-[3rem] 
    border-r-[3rem] border-b-[6rem] border-l-transparent 
    border-r-transparent border-b-green-50"
      ></div>
      <div
        className="absolute left-[5rem] bottom-[1rem] w-0 h-0 border-l-[2rem] 
    border-r-[2rem] border-b-[4rem] border-l-transparent 
    border-r-transparent border-b-green-50"
      ></div>
    </div>
  );
};

export default ImageShimmer;

import React from "react";
import ShimmerRestaCard from "./ShimmerRestaCard";

const ShimmerResListPage = () => {
  return (
    <div className="ml-4 grid grid-cols-2 gap-10 p-4 z-0">
      <ShimmerRestaCard />
      <ShimmerRestaCard />
      <ShimmerRestaCard />
      <ShimmerRestaCard />
      <ShimmerRestaCard />
    </div>
  );
};

export default ShimmerResListPage;

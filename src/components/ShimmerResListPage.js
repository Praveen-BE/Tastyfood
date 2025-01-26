import React from "react";
import ShimmerRestaCard from "./ShimmerRestaCard";

const ShimmerResListPage = () => {
  return (
    <div className="ml-4 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 p-4 z-0">
      <ShimmerRestaCard />
      <ShimmerRestaCard />
      <ShimmerRestaCard />
      <ShimmerRestaCard />
      <ShimmerRestaCard />
    </div>
  );
};

export default ShimmerResListPage;

import React from "react";
import { useSelector } from "react-redux";
import Shimmer, { LineShimmerFull, LineShimmerHalf } from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import ShimmerRestaCard from "./ShimmerRestaCard";

const RestaurantListPage = () => {
  const restaurantListData = useSelector(
    (store) => store.restaurant.restarantList
  );
  // const restaurantListData = null;
  if (restaurantListData == null) {
    return (
      <div className="ml-4 grid grid-cols-2 gap-10 p-4">
        <ShimmerRestaCard />
        <ShimmerRestaCard />
        <ShimmerRestaCard />
        <ShimmerRestaCard />
        <ShimmerRestaCard />
      </div>
    );
  }

  return (
    <div className="ml-4 grid grid-cols-2 gap-10 p-4">
      {restaurantListData.map((data) => (
        <Link to={"/menu/" + data?.info?.id} key={data?.info?.id}>
          <RestaurantCard resData={data} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantListPage;

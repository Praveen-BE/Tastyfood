import React from "react";
import { useSelector } from "react-redux";

import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import ShimmerResListPage from "./ShimmerResListPage";

const RestaurantListPage = () => {
  const restaurantListData = useSelector(
    (store) => store.restaurant.restarantList
  );
  // const restaurantListData = null;
  if (restaurantListData == null) {
    return <ShimmerResListPage />;
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

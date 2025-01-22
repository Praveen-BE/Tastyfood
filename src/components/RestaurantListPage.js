import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

// import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import ShimmerResListPage from "./ShimmerResListPage";
import ShimmerRestaCard from "./ShimmerRestaCard";
const RestaurantCard = lazy(() => import("./RestaurantCard"));

const RestaurantListPage = () => {
  const restaurantListData = useSelector(
    (store) => store.restaurant.updatedRestaurantList
  );
  // const restaurantListData = null;
  if (restaurantListData == null) {
    return <ShimmerResListPage />;
  }

  return (
    <div className="ml-4 grid grid-cols-2 gap-10 p-4">
      {restaurantListData.map((data) => (
        <Link to={"/menu/" + data?.info?.id} key={data?.info?.id}>
          <Suspense fallback={<ShimmerRestaCard />}>
            <RestaurantCard resData={data} />
          </Suspense>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantListPage;

import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

// import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import ShimmerResListPage from "./ShimmerResListPage";
import ShimmerRestaCard from "./ShimmerRestaCard";
import SearchBar from "./SearchBar";
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
    <>
      <SearchBar />
      <div className="ml-14 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-1">
        {restaurantListData.map((data) => (
          <Link
            className="m-0"
            to={"/menu/" + data?.info?.id}
            key={data?.info?.id}
          >
            <Suspense fallback={<ShimmerRestaCard />}>
              <div
                className="w-[410px] md:w-[380px] lg:w-[180px] 
          flex justify-center items-center rounded-3xl shadow-2xl"
              >
                <RestaurantCard resData={data} />
              </div>
            </Suspense>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantListPage;

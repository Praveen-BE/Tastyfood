import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantListPage = () => {
  const restaurantListData = useSelector(
    (store) => store.restaurant.restarantList
  );
  if (restaurantListData == null) {
    return <Shimmer />;
  }
  // return (
  //   <div>
  //     {
  //       <RestaurantCard
  //         key={restaurantListData[0]?.info?.id}
  //         resData={restaurantListData?.[0]}
  //       />
  //     }
  //   </div>
  // );
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

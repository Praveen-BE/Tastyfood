import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMenuData, addRestaurantName } from "../utils/restaurantMenuSlice";
import CatagoryList from "./CatagoryList";
import ShimmerMenuPage from "./ShimmerMenuPage";
import { vercelURL } from "../utils/constant";

const MenuListPage = () => {
  const [showIndex, setShowIndex] = useState(null);
  const menuData = useSelector((store) => store.restaurantMenu.menuData);
  // const menuData = null;
  const restaurantName = useSelector(
    (store) => store.restaurantMenu.restaurantName
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    menuListDataFetchAPI();
    setShowIndex(0);
  }, []);

  const menuListDataFetchAPI = async () => {
    const data = await fetch(vercelURL + "restuarantMenu/" + id);
    const json = await data.json();
    const menuData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const { text } = json?.data?.cards[0]?.card?.card;
    // console.log(text);
    // console.log(menuData);
    const array = menuData.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        item?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    // console.log(array);
    dispatch(addMenuData(array));
    dispatch(addRestaurantName(text));
  };
  if (menuData.length == 0) return <ShimmerMenuPage />;
  return (
    <div className="lg:w-screen lg:flex lg:justify-center lg:items-center lg:flex-col">
      <div className="m-0 p-0 w-full lg:w-[50rem]">
        <h1 className="text-center w-full font-black text-[3rem] lg:text-[2rem] font-display">
          {restaurantName}
        </h1>
        <>
          {menuData.map((data, index) => (
            <CatagoryList
              firstTitle={data?.card?.card?.title || data?.title}
              key={data?.card?.card?.title || data?.title}
              data={data}
              showItem={index == showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              nullIndex={() => setShowIndex(null)}
              innerIndex={null}
              innerShowItem={null}
              nullInnerShowItem={null}
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default MenuListPage;

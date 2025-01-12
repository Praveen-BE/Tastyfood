import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMenuData, addRestaurantName } from "../utils/restaurantMenuSlice";
import CatagoryList from "./CatagoryList";

const MenuListPage = () => {
  const [showIndex, setShowIndex] = useState(null);
  const menuData = useSelector((store) => store.restaurantMenu.menuData);
  const restaurantName = useSelector(
    (store) => store.restaurantMenu.restaurantName
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    menuListDataFetchAPI();
  }, []);
  const menuListDataFetchAPI = async () => {
    const data = await fetch("http://localhost:3333/restuarantMenu/" + id);
    const json = await data.json();
    const menuData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const { text } = json?.data?.cards[0]?.card?.card;
    console.log(text);
    console.log(menuData);
    const array = menuData.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        item?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    console.log(array);
    dispatch(addMenuData(array));
    dispatch(addRestaurantName(text));
  };
  return (
    <div className="m-0 p-0 w-full">
      <h1 className="text-center w-full text-[3rem] font-display">
        {restaurantName}
      </h1>
      {menuData.map((data, index) => (
        <CatagoryList
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
    </div>
  );
};

export default MenuListPage;

import React, { useEffect, useState } from "react";
import ItemCard, { ItemCardAdd } from "./ItemCard.js";
import Shimmer from "./Shimmer";
import { DropDownIocn } from "../utils/useSvgElements";
import classNames from "classnames";

const CatagoryList = ({
  firstTitle,
  data,
  showItem,
  setShowIndex,
  nullIndex,
  innerIndex,
  innerShowItem,
  nullInnerShowItem,
}) => {
  const [clickCount, setClickCount] = useState(1);
  const [innerIndexVal, setInnerIndexVal] = useState(null);
  const ComponentItemCardAdd = ItemCardAdd(ItemCard);

  if (!data) {
    return <Shimmer />;
  }
  const { title, categories, itemCards } = data?.card?.card || data;
  const handleAccordian = () => {
    setClickCount(clickCount + 1);

    if (clickCount % 2 != 0) {
      if (setShowIndex == null) {
        innerIndex();
      } else {
        setShowIndex();
      }
    } else {
      if (nullInnerShowItem == null) {
        nullIndex();
      } else {
        nullInnerShowItem();
      }
    }
  };

  const clickEventFirstElement = () => {
    if (firstTitle == "Recommended") {
      // const button = document.querySelector("#Recommended");
      // console.log(button);
      // button.addEventListener("click", function () {
      //   handleAccordian();
      // });
      // button.click();
      setClickCount(clickCount + 1);
    }
  };

  useEffect(() => {
    clickEventFirstElement();
  }, []);

  return (
    <div id={title}>
      {categories ? (
        <>
          <div className="menuListSets flex justify-between items-center m-4 px-4 py-1 rounded-xl">
            <h1 className="text-[3.5rem] font-display font-semibold py-2">
              {title}
            </h1>
            <div className={classNames({ "rotate-180": showItem })}>
              <>{categories ? "" : <DropDownIocn />}</>
            </div>
          </div>
          <div className="m-8">
            {categories.map((data, index) => (
              <CatagoryList
                id={data?.card?.card?.title || data?.title}
                key={data?.title}
                data={data}
                showItem={false}
                setShowIndex={null}
                nullIndex={nullIndex}
                innerIndex={() => setInnerIndexVal(index)}
                innerShowItem={index == innerIndexVal ? true : false}
                nullInnerShowItem={() => setInnerIndexVal(null)}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => handleAccordian()}
            className={classNames({
              innerMenuListSets: title == "Reccommended" ? true : false,
              "flex justify-between items-center m-4 px-4 py-1 border-2 shadow-xl rounded-xl": true,
            })}
          >
            <h1 className="text-[3.5rem] font-display font-semibold py-2">
              {title}
            </h1>
            {categories ? (
              ""
            ) : (
              <div
                className={classNames({
                  "rotate-180": showItem || innerShowItem,
                })}
              >
                <DropDownIocn />
              </div>
            )}
          </div>
          <>
            {(showItem || innerShowItem) && (
              <>
                {itemCards.map((data) => (
                  <ComponentItemCardAdd
                    key={data?.card?.info?.id}
                    data={data}
                  />
                ))}
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

export default CatagoryList;

import React, { useState } from "react";
import ItemCard, { ItemCardAdd } from "./ItemCard.js";
import Shimmer from "./Shimmer";
import { DropDownIocn } from "../utils/useSvgElements";
import classNames from "classnames";

const CatagoryList = ({
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

  return (
    <div className="">
      {categories ? (
        <>
          <div className="flex justify-between items-center m-4 px-4 py-1 rounded-xl">
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
            className="flex justify-between items-center m-4 px-4 py-1 border-2 shadow-xl rounded-xl"
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

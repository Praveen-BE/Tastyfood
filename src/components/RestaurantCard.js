import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constant";
import { StarIcon } from "../utils/useSvgElements";
import Shimmer from "./Shimmer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "classnames";
import ImageShimmer from "./ImageShimmer";
import ShimmerRestaCard from "./ShimmerRestaCard";

const RestaurantCard = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { resData } = props;
  // console.log(resData);
  if (resData == null || resData == undefined) {
    return <ShimmerRestaCard />;
  }
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    areaName,
  } = resData?.info;
  return (
    <div className="">
      <div className="w-[410px] md:w-[350px] lg:w-[160px] overflow-hidden">
        <div className="relative my-4 w-[410px] md:w-[150px] lg:w-[170px]">
          <div className="absolute m-0 p-0 w-full h-full -z-50"></div>
          <div className="relative flex w-[410px] md:w-[350px] lg:w-[160px] h-[500px] lg:h-[200px] rounded-[50px] pt-4">
            <LazyLoadImage
              className={classNames({
                "w-full rounded-[32px] -z-20": true,
                hidden: !loaded,
              })}
              src={CDN_URL + cloudinaryImageId}
              onLoad={() => setLoaded(true)}
              // onLoad={() => console.log("Hello")}
            />
            {!loaded && <ImageShimmer />}
            {loaded && (
              <div className="absolute bottom-0 w-full h-[10rem] lg:h-[6rem] flex items-end bg-gradient-to-t from-black rounded-b-[32px] z-0">
                {aggregatedDiscountInfoV3 ? (
                  <div className="w-[410px] md:w-[350px] lg:w-[160px]">
                    <h3 className="ml-4 lg:pl-1 lg:pb-1 font-display text-white text-[50px] lg:text-[1.2rem] font-black w-[410px] lg:w-[170px]">
                      {aggregatedDiscountInfoV3?.header}
                    </h3>
                    <h3 className="ml-4 lg:pl-1 lg:pb-1 font-display text-white text-[40px] lg:text-[1.4rem] font-black w-[410px] lg:w-[170px]">
                      {aggregatedDiscountInfoV3?.subHeader}
                    </h3>
                  </div>
                ) : (
                  <h3 className="ml-4 lg:pl-1 lg:pb-1 font-display text-white text-[40px] lg:text-[1.2rem] font-black w-[410px] lg:w-[170px]">
                    {costForTwo}
                  </h3>
                )}
              </div>
            )}
          </div>

          <div className="-mt-7 pt-10 lg:pt-7 w-full md:w-[350px]">
            <h3 className="font-display w-full text-[50px] md:text-[3rem] lg:text-[1.3rem] text-[--primary-text-color] font-black line-clamp-1">
              {name}
            </h3>
            <div className="flex w-full">
              <div className="p-2 lg:p-0 w-16 lg:w-6 h-16 md:h-14 lg:h-6 flex justify-center items-center bg-red-500 rounded-full">
                <StarIcon />
              </div>
              <div className="ml-2 font-display h-[20px] text-[50px]  md:text-[3rem] lg:text-[1.2rem] font-black text-[--primary-text-color]">
                {avgRating}
              </div>{" "}
              <div
                className="relative mx-5 lg:mx-1 h-16 lg:h-8 flex justify-center items-start
             text-[50px]  lg:text-[1.5rem]"
              >
                <div className="absolute mt-10 lg:mx-1 top-[-40px] text-[80px]  md:text-[3rem] lg:text-[1.2rem] font-black  text-[--primary-text-color]">
                  .
                </div>
              </div>
              <div className="ml-2 font-display text-[50px] md:text-[3rem] lg:text-[1.2rem] text-[--primary-text-color] w-full line-clamp-1 font-black">
                {sla?.slaString}
              </div>
            </div>
            <h3 className="font-display text-[50px] md:text-[3rem] lg:text-[1.2rem] text-[--primary-text-color] line-clamp-1">
              {cuisines.join(", ")}
            </h3>
            <h3 className="font-display text-[50px] md:text-[3rem] lg:text-[1.2rem] text-[--primary-text-color] line-clamp-1">
              {areaName}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

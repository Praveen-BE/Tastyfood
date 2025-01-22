import { useEffect } from "react";
import { CDN_URL } from "../utils/constant";
import { StarIcon } from "../utils/useSvgElements";
import Shimmer from "./Shimmer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  if (resData == null || resData == undefined) {
    return <Shimmer />;
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
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      // use query selector that matches your class name
      // you may assign it to a variable; we have used literal here
      // to make this example more clear.

      const lazyBackgrounds = [].slice.call(
        document.querySelectorAll(".lazy-background")
      );

      if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              // remove the lazy class name
              // when image enters viewport
              entry.target.classList.remove("lazy-background");
              lazyBackgroundObserver.unobserve(entry.target);
            }
          });
        });

        lazyBackgrounds.forEach(function (lazyBackground) {
          lazyBackgroundObserver.observe(lazyBackground);
        });
      } else {
        lazyBackgrounds.forEach(function (entry) {
          entry.classList.remove("lazy-background");
        });
      }
    });
  }, []);
  return (
    <div className="p-1 rounded-3xl shadow-2xl">
      <div className="relative my-4 ml-8 w-96">
        <div
          // style={{ backgroundImage: `url(${CDN_URL + cloudinaryImageId})` }}
          // className="bg-cover bg-center bg-no-repeat w-[410px] h-[500px] rounded-[32px]"
          className="relative flex w-[410px] h-[500px] rounded-[32px]"
        >
          {" "}
          <LazyLoadImage
            className="m-0 p-0 w-[410px] rounded-[32px] -z-20"
            src={CDN_URL + cloudinaryImageId}
          />
          <div className="absolute w-full h-full flex items-end bg-gradient-to-t from-black rounded-[32px] z-0">
            {aggregatedDiscountInfoV3 ? (
              <div className="w-[410px]">
                <h3 className="ml-4 font-display text-white text-[50px] font-black w-[410px]">
                  {aggregatedDiscountInfoV3?.header}
                </h3>
                <h3 className="ml-4 font-display text-white text-[40px] font-black w-[410px]">
                  {aggregatedDiscountInfoV3?.subHeader}
                </h3>
              </div>
            ) : (
              <h3 className="pb-20 pl-5 font-display text-white h-4 text-[50px] font-black w-[410px]">
                {costForTwo}
              </h3>
            )}
          </div>
        </div>

        <div className="-mt-7 pt-10 w-[410px]">
          <h3 className="font-display w-[410px] text-[50px] text-[--primary-text-color] font-black line-clamp-1">
            {name}
          </h3>
          <div className="flex">
            <div className="p-2 w-16 h-16 flex justify-center items-center bg-red-500 rounded-full">
              <StarIcon />
            </div>
            <div className="ml-2 font-display h-[20px] text-[50px] font-black text-[--primary-text-color]">
              {avgRating}
            </div>{" "}
            <div className="relative mx-5 h-16 flex justify-center items-start text-[50px]">
              <div className="absolute top-[-40px] text-[80px] font-black  text-[--primary-text-color]">
                .
              </div>
            </div>
            <div className="ml-2 font-display text-[50px] text-[--primary-text-color] line-clamp-1 font-black">
              {sla?.slaString}
            </div>
          </div>
          <h3 className="font-display text-[50px] text-[--primary-text-color] line-clamp-1">
            {cuisines.join(", ")}
          </h3>
          <h3 className="font-display text-[50px] text-[--primary-text-color] line-clamp-1">
            {areaName}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

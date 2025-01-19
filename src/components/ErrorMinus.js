import React from "react";
import { useSelector } from "react-redux";

const ErrorMinus = () => {
  const errorMinus = useSelector((store) => store.error.errorMinus);
  return (
    <>
      {errorMinus ? (
        <div className="absolute top-[2rem] left-[50%] translate-x-[-50%]">
          <h1 className="bg-[--filterAndSortTextColor] text-white px-10 py-5 font-semibold text-[3rem] rounded-full">
            Item Can't be Zero
          </h1>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ErrorMinus;

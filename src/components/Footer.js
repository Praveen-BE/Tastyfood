import React, { useState } from "react";
import { color1, color2, color3 } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchBar } from "../utils/pageSlice";
import { SearchIconSVG } from "../utils/useSvgElements";

const Footer = () => {
  const dispatch = useDispatch();
  const searchBarShowToggle = () => {
    dispatch(toggleSearchBar());
  };
  return (
    <div className="fixed lg:hidden bottom-0 m-0 p-0 w-screen h-28 flex bg-[--footerBg]">
      <div className="w-6/12 flex justify-center items-center">
        <Link to={"/"}>
          <img
            className="w-24"
            src="https://firebasestorage.googleapis.com/v0/b/userprofile-90dd5.appspot.com/o/tastyfoodlogo%2Ftastyfoodlogo1-compressed.png?alt=media&token=b3cb295c-4f45-47c4-adf3-a085a902b827"
            alt="TastyfoodLogo"
          />
        </Link>
      </div>
      <div
        onClick={() => searchBarShowToggle()}
        className="w-6/12  flex justify-center items-center bg-[--footerBg]"
      >
        <div className="w-16">
          <SearchIconSVG />
        </div>
      </div>
    </div>
  );
};

export default Footer;

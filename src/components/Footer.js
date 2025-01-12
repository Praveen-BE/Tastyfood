import React from "react";
import { color1, color2, color3 } from "../utils/constant";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 m-0 p-0 w-screen h-28 flex bg-[--footerBg]">
      <div className="w-6/12 flex justify-center items-center">
        <Link to={"/"}>
          <img
            className="w-24"
            src="https://firebasestorage.googleapis.com/v0/b/userprofile-90dd5.appspot.com/o/tastyfoodlogo%2Ftastyfoodlogo1-compressed.png?alt=media&token=b3cb295c-4f45-47c4-adf3-a085a902b827"
            alt="TastyfoodLogo"
          />
        </Link>
      </div>
      <div className="w-6/12  flex justify-center items-center bg-[--footerBg]">
        <div className="w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;

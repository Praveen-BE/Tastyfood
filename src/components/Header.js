import { useSelector } from "react-redux";
import {
  LeftDirectionArrow,
  LocationSymbol,
  ProfileIcon,
  ShopingCartIcon,
} from "../utils/useSvgElements";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const cartItemCount = useSelector((store) => store.cart.cartData);
  // const goBack = () => {
  //   history.goBack();
  // };
  return (
    <div className="top-0 left-0 m-0 h-28 lg:h-16 w-screen flex justify-between bg-[--headerBg] border-b-[2px] border-[--border-color]">
      <div className="mt-2 ml-2 sm:hidden lg:block">
        <Link to={"/"}>
          <img
            className="w-12"
            src="https://firebasestorage.googleapis.com/v0/b/userprofile-90dd5.appspot.com/o/tastyfoodlogo%2Ftastyfoodlogo1.png?alt=media&token=d45a8bb9-621f-41fc-b48c-4040969527b1"
            alt="TastyfoodLogo"
          />
        </Link>
      </div>
      {/* <SearchBar /> */}
      <div className="block lg:hidden" onClick={() => navigate(-1)}>
        <div className="flex pt-4 pl-4 justify-center items-center">
          <LeftDirectionArrow />
          <h1 className="ml-2 text-[3rem] font-black font-display text-[--primary-text-color]">
            Other
          </h1>
          <div className="w-8 h-8 ml-2 border-2 border-black rounded-full flex items-center justify-center">
            <LocationSymbol />
          </div>
        </div>
      </div>

      <div className="ml-0 p-4 h-28 lg:h-16 flex items-center">
        <div className="relative m-0 p-0 w-20">
          <div className="absolute -mt-8 lg:-mt-4 ml-10 lg:ml-6 px-2 lg:px-1 py-2 lg:py-1 text-3xl lg:text-sm rounded-full text-white bg-[--primary-text-color]">
            {cartItemCount.length}
          </div>
          <Link to={"/cart"}>
            <ShopingCartIcon />
          </Link>
        </div>
        <div className="m-0 p-0 w-20 lg:w-10">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;

import { LocationSymbol, ProfileIcon } from "../utils/useSvgElements";

const Header = () => {
  return (
    <div className="top-0 left-0 m-0 h-28 w-screen flex justify-between bg-[--headerBg] border-b-[2px] border-[--border-color]">
      <div className="hidden">
        <img
          className="w-24"
          src="https://firebasestorage.googleapis.com/v0/b/userprofile-90dd5.appspot.com/o/tastyfoodlogo%2Ftastyfoodlogo1.png?alt=media&token=d45a8bb9-621f-41fc-b48c-4040969527b1"
          alt="TastyfoodLogo"
        />
      </div>

      <div className="flex pt-4 pl-4 justify-center items-center">
        <h1 className="text-[3rem] font-black font-display text-[--primary-text-color]">
          {"<-"} Other
        </h1>
        <div className="w-8 h-8 ml-2 border-2 border-black rounded-full flex items-center justify-center">
          <LocationSymbol />
        </div>
      </div>
      {/* <div className="m-0 p-0 h-28 flex items-center">
        <input
          className="m-4 p-0 w-[30rem]"
          placeholder="search here"
          type="text"
        />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div> */}
      <div className="ml-0 p-4 h-28 flex items-center">
        <div className="m-0 p-0 w-20">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;

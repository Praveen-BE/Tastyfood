import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { closeSearchBar } from "../utils/pageSlice.js";

const Body = () => {
  // const ref = useRef();
  // const EVENT = "click";
  // const searchBar = useSelector((store) => store.page.searchBar);
  // const dispatch = useDispatch();
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

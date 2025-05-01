import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { closeSearchBar } from "../utils/pageSlice.js";
import { addUser, removeUser } from "../utils/userSlice.js";
import { vercelURL } from "../utils/constant.js";

const Body = () => {
  // const ref = useRef();
  // const EVENT = "click";
  // const searchBar = useSelector((store) => store.page.searchBar);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await fetch(vercelURL + "profile/view", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        console.error("Error fetching data:", res.status);
        return;
      }

      const data = await res.json();
      console.log(data);
      dispatch(addUser(data));
    } catch (err) {
      if (err.status === 401) {
        dispatch(removeUser());
        // navigate("/");
      } else {
        console.error(err);
      }
    }
  };
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

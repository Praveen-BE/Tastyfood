import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

const Body = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { className: "heading", xyz: "abc" },
//   "Hello World from React !!!"
// );
const resList = [
  {
    data: {
      id: 1,
      name: "Meghana food",
      cuisines: ["Burger", "Biriyani", "American"],
      avgRating: 5,
      costForTwo: 300,
      deliveryTime: "30 minutes",
      cloudinary_imageid: "goevzinldbotvpn3xid1",
    },
  },
  {
    data: {
      id: 2,
      name: "KFC",
      cuisines: ["Burger", "Chicken", "American"],
      avgRating: 5,
      costForTwo: 200,
      deliveryTime: "30 minutes",
      cloudinary_imageid: "goevzinldbotvpn3xid1",
    },
  },
  {
    data: {
      id: 3,
      name: "Burger King",
      cuisines: ["Burger", "Biriyani"],
      avgRating: 5,
      costForTwo: 300,
      deliveryTime: "20 minutes",
      cloudinary_imageid: "goevzinldbotvpn3xid1",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData.data;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo / 100}</h3>
      <h3>{deliveryTime}</h3>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.data.cloudinary_imageid
        }
      />
    </div>
  );
};

const Heading = ({ resList }) => {
  return (
    <div>
      <h1 className="heading" style={{ backgroundColor: "#f0f0f0" }}>
        Namste React Using JSX
      </h1>
      {resList.map((res) => (
        <RestaurantCard resData={res} key={res.data.id} />
      ))}
    </div>
  );
};

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "h1",
//     { className: "heading", id: "child" },
//     "Hello World from React Child !!!"
//   )
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(Heading); // This is not HTML this is Object by React
// React Element (Object) =>(Convert into)=> HTML (Browser Understand code)
root.render(<Heading resList={resList} />);

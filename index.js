const heading1 = document.createElement("h1");
heading1.innerHTML = "Hello World from JS";
const root1 = document.getElementById("root1");
root1.appendChild(heading1);

const heading = React.createElement(
  "h1",
  { className: "heading", xyz: "abc" },
  "Hello World from React !!!"
);
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
console.log(heading); // This is not HTML this is Object by React
// React Element (Object) =>(Convert into)=> HTML (Browser Understand code)
root.render(heading);

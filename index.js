import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

// const heading = React.createElement(
//   "h1",
//   { className: "heading", xyz: "abc" },
//   "Hello World from React !!!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

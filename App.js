import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Helloworld"
);
console.log(heading); //return object basically

const headding2 = <h1 id="heading">Helloworld</h1>;
console.log(headding2); //return object basically same as heading gothrough notes fo more about bebel

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headding2);

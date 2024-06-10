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

const Title = () => (
  <h1 className="head" tabIndex="5">
    React using JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      {/* using another functional Component */}
      {headding2}
      {/* using reactElement ==jsx */}
      <h1 className="heaidng"> React Fucntional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

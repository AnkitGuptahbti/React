const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Helloworld"
);
// console.log(heading) its basically object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //replace the content of this root element only

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Helloworld"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

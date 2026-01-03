import Nav from "./components/nav.js";
import Main from "./components/main.js";

let App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(Nav),
    React.createElement(Main)
  );
};

export default App;

let Nav = () => {
  return React.createElement(
    "nav",
    null,
    React.createElement(
      "div",
      { className: "left" },
      React.createElement("img", {
        src: "./assets/logo.png",
        className: "logo",
        alt: "error",
      }),
      React.createElement(
        "ul",
        null,
        React.createElement("li", null, "About Me"),
        React.createElement("li", null, "Portfolio"),
        React.createElement("li", null, "Services"),
        React.createElement("li", null, "Blog")
      )
    ),
    React.createElement(
      "div",
      { className: "right" },
      React.createElement("p", null, "Book A Call"),
      React.createElement("i", { className: "ri-arrow-right-up-line" })
    )
  );
};

export default Nav;

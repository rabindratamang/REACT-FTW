import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Japanese"
    }),
    React.createElement(Pet, {
      name: "Simba",
      animal: "Dog",
      breed: "Husky"
    }),
    React.createElement(Pet, {
      name: "Tyson",
      animal: "Cat",
      breed: "Fluffy"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));

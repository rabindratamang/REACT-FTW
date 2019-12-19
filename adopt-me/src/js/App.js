import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="luna" animal="Dog" breed="Havanese" />
      <Pet name="Simba" animal="Dog" breed="Husky" />
      <Pet name="Tyson" animal="Cat" breed="Fluffy" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

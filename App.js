created the app.js file

import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

/*const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "bingo",
      animal: "dog",
      breed: "alsatian",
    }),
    React.createElement(Pet, { name: "Leo", animal: "cat", breed: "cat" }),
  ]);
};
*/

const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adopt Me!</h1>
      <Pet name="Leo" animal="cat" breed="cat" />
      <Pet name="bingo" animal="dog" breed="alsatian" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

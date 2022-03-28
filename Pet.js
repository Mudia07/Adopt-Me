import React from "react";
//const Pet = () => {
// return React.createElement("div", {}, [
//   React.createElement("h2", {}, props.name),
//  React.createElement("h2", {}, props.animal),
//  React.createElement("img", {}, props.breed),
//]);
//};

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <img src={props.breed} />
    </div>
  );
};
export default Pet;

import React from "react";

const PortfolioProject1 = (props) => (
  <div>
    <h1>Project one</h1>
    <p>A react project with id {props.match.params.id}</p>
  </div>
);

export default PortfolioProject1;

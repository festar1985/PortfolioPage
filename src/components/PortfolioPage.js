import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => (
  <div>
    <h1> These are my projects</h1>
    <Link to="/portfolio/1">Project1</Link>
    <Link to="/portfolio/2">Project2</Link>
  </div>
);

export default PortfolioPage;

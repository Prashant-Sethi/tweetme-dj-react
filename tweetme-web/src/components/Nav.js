import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <Link to="/" exact="true">
        Home
      </Link>
    </div>
  );
};

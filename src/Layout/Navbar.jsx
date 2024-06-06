import React from "react";
import { Navbar_content } from "../Data/Navbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        {Navbar_content.map((ele, index) => {
          return (
            <Link to={ele.link}>
              <button>{ele.title}</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

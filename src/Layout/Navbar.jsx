import React, { useState } from "react";
import { Navbar_content,Navbar_more } from "../Data/Navbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  return (
    <nav className="relative bg-red-300 flex py-1 px-4 items-center justify-between text-lg font-light">
      <div>Logo</div>
      <div className="flex items-center">
        {Navbar_content.map((ele, index) => {
          return (
            <Link to={ele.link} key={index}>
              <button className="px-4 py-3">{ele.title}</button>
            </Link>
          );
        })}
        <div onMouseOver={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)} className="cursor-pointer px-4 py-3 flex items-center gap-3"> <h2>More</h2> <svg fill="#000000" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></div>
      </div>
      <div onMouseOver={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)} className={`shadow-[0px_-12px_20px_-11px_rgba(0,0,0,0.46)] absolute rounded right-10 top-12 py-4 px-12 bg-slate-100 items-center flex-col  ${moreOpen ? "flex" : "hidden"}`}>
        {Navbar_more.map((item, i) => {
          return (
            <Link to={item.link} key={i}>
              <button className="px-4 py-2 hover:scale-110 font-extralight transition-all duration-300">{item.title}</button>
            </Link>
          )
        })}
      </div>
    </nav>
  );
};

export default Navbar;

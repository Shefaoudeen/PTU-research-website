import React, { useEffect, useState } from "react";
import { Navbar_content, Navbar_more } from "../Data/Navbar";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useGSAP(() => {
    gsap.from("#menuBar", {
      x: 200,
      duration: 0.5,
    });
  }, [menuOpen]);
  return (
    <>
      <nav className="relative bg-white flex  py-1 px-4 items-center justify-between text-lg font-light select-none">
        <div>Logo</div>
        <div
          className="py-2 md:hidden flex flex-col justify-center items-center cursor-pointer duration-300 "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-7 h-1 my-0.5 bg-gray-500 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-1 my-0.5 bg-gray-500 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-1 my-0.5 bg-gray-500 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center flex-wrap">
            {Navbar_content.map((ele, index) => {
              return (
                <NavLink to={ele.link} key={index}>
                  <button className="px-4 py-3">{ele.title}</button>
                </NavLink>
              );
            })}
            <div
              onMouseOver={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
              className="cursor-pointer px-4 py-3 flex items-center gap-3"
            >
              {" "}
              <h2>More</h2>{" "}
              <svg
                className={`duration-200 ${moreOpen ? "rotate-180" : ""}`}
                fill="#000000"
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div
            onMouseOver={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
            className={`shadow-[0px_-12px_20px_-11px_rgba(0,0,0,0.46)] absolute rounded right-10 top-12 py-4 px-12 bg-slate-100 items-center flex-col  ${
              moreOpen ? "flex" : "hidden"
            }`}
          >
            {Navbar_more.map((item, i) => {
              return (
                <NavLink to={item.link} key={i}>
                  <button className="px-4 py-2 hover:scale-110  transition-all duration-300">
                    {item.title}
                  </button>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>

      <div
        id="menuBar"
        className={`${
          menuOpen ? "flex " : "hidden"
        } absolute flex-col pl-10 py-4 right-0 bg-white/50 backdrop-blur-md w-[50vw] font-light shadow-lg`}
      >
        {Navbar_content.map((ele, index) => {
          return (
            <NavLink to={ele.link} key={index}>
              <button
                id="links"
                className="px-4 py-3 hover:scale-110  transition-all duration-300"
              >
                {ele.title}
              </button>
            </NavLink>
          );
        })}
        {Navbar_more.map((item, i) => {
          return (
            <NavLink to={item.link} key={i}>
              <button
                id="links"
                className="px-4 py-3 hover:scale-110  transition-all duration-300"
              >
                {item.title}
              </button>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;

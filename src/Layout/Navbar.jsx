import React, { useEffect, useState } from "react";
import { Navbar_content, Navbar_more } from "../Data/Navbar";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import arrowIcon from "../assets/icons/arrow-icon.svg";

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
              menuOpen ? "rotate-[135deg] translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-1 my-0.5 bg-gray-500 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-1 my-0.5 bg-gray-500 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-[135deg] -translate-y-2.5" : ""
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
              <img
                className={`w-4 duration-300 ${moreOpen ? "rotate-180" : ""}`}
                src={arrowIcon}
              ></img>
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

      {/* for smaller screens */}
      <div
        id="menuBar"
        className={`${
          menuOpen ? "flex " : "hidden"
        } absolute z-[100] flex-col pl-5 sm:pl-10 py-4 right-0 bg-white/75 backdrop-blur-sm w-[50vw] font-light shadow-lg h-screen`}
      >
        {Navbar_content.map((ele, index) => {
          return (
            <NavLink
              to={ele.link}
              key={index}
              onClick={() => setMenuOpen(false)}
            >
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
            <NavLink to={item.link} key={i} onClick={() => setMenuOpen(false)}>
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

import React, { useEffect, useState } from "react";
import { Navbar_content, Navbar_more } from "../Data/Navbar";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import arrowIcon from "../assets/icons/arrow-icon.svg";
import { PTU1, Ptu_logo } from "../assets";

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    gsap.from("#sideBar", {
      x: 200,
      duration: 0.5,
    });

    //cleanup function to set the position of sideBar to default
    return () => {
      gsap.set("#sideBar", {
        x: 0,
      })
    }
  }, [sidebarOpen]);
  return (
    <>
      <div className="fixed md:static w-screen z-[9999999]">
        <nav className="relatve  bg-white flex py-1 px-4 items-center justify-between text-lg font-light select-none shadow-xl">
          <div>
            <img src={Ptu_logo} className="w-7 py-0.5 md:w-[40px]" />
          </div>
          <div  //hamburger icon
            className="py-2 md:hidden flex flex-col justify-center items-center cursor-pointer duration-300 "
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
          {/* hamburger icon animationDuration */}
            <div
              className={`w-7 h-1 my-0.5 bg-gray-500 rounded transition-transform duration-300 ${
                sidebarOpen ? "rotate-[135deg] translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-1 my-0.5 bg-gray-500 rounded transition-opacity duration-300 ${
                sidebarOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-7 h-1 my-0.5 bg-gray-500 rounded transition-transform duration-300 ${
                sidebarOpen ? "-rotate-[135deg] -translate-y-2.5" : ""
              }`}
            ></div>
          </div>
          {/* nav menus */}
          <div className="hidden md:block">
            <div className="flex items-center flex-wrap">
              {Navbar_content.map((ele, index) => {
                return (
                  <NavLink to={ele.link} key={index}>
                    <button className="px-4 py-3 hover:scale-110 duration-300">
                      {ele.title}
                    </button>
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
            <div  //more menu bar
              onMouseOver={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
              className={`shadow-[0px_-12px_20px_-11px_rgba(0,0,0,0.46)] absolute rounded right-10 top-12 py-4 px-12 bg-white items-center flex-col  ${
                moreOpen ? "flex" : "hidden"
              }`}
            > 
            {/* more menus */}
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
      </div>

      {/* for smaller screens - render side bar*/}
      <div
        id="sideBar"
        className={`${
          sidebarOpen ? "flex " : "hidden"
        } fixed z-[100] flex-col pl-5 sm:pl-10 py-4 top-10 right-0 bg-white/75 backdrop-blur-sm w-[50vw] font-light shadow-lg h-screen`}
      >
        {Navbar_content.map((ele, index) => {
          return (
            <NavLink
              to={ele.link}
              key={index}
              onClick={() => setSidebarOpen(false)}
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
            <NavLink to={item.link} key={i} onClick={() => setSidebarOpen(false)}>
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

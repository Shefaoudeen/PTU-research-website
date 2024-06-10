import React from "react";
import bannerBG from "../assets/Images/bannerBG.png";
import ptuLogo from "../assets/Images/ptu-logo.png";

const Banner = (props) => {
  return (
    <>
      <div
        className="h-[50vh] md:h-[40vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-evenly md:justify-between h-full  py-5 sm:px-12">
          <div>
            <img className="w-40" src={ptuLogo}></img>
          </div>
          <div className=" flex flex-col items-center gap-4 text-4xl px-10">
            <h1 className="text-blue-300 font-semibold text-center">
              {props.title}
            </h1>
            <h1
              className={`text-wrap text-2xl text-white text-center ${props.desc_style}`}
            >
              {props.desc}
            </h1>
            <h1 className="text-wrap text-2xl text-white">
              {props.additional}
            </h1>
          </div>
          <div className="lg:w-20 xl:w-40 hidden lg:block"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;

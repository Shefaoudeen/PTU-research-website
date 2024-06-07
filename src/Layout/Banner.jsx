import React from "react";
import bannerBG from "../assets/Images/bannerBG.png";
import ptuLogo from "../assets/Images/ptu-logo.png";

const Banner = ({title,desc,additional}) => {
  return (
    <>
      <div
        className="h-[50vh] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <div className="flex items-center justify-between h-full  py-5 px-12">
          <div><img className="w-40" src={ptuLogo}></img></div>
          <div className=" flex flex-col items-center gap-4 text-4xl">
            <h1 className="text-blue-300 font-semibold">{title}</h1>
            <h1 className="text-wrap text-2xl text-white">{desc}</h1>
            <h1 className="text-wrap text-2xl text-white">{additional}</h1>
          </div>
          <div className="w-[10vw]"></div>
        </div>

      </div>
    </>
  );
};

export default Banner;

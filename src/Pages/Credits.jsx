import React from "react";
import Banner from "../Layout/Banner";
import { DC_Logo, Github, Linkedin, pic1 } from "../assets";

const Credits = () => {
  return (
    <div>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Credits"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="w-full py-5 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Website Developed by</h1>
          <img src={DC_Logo} alt="" className="w-[300px]" />
          <h1 className="font-bold text-3xl pt-5 text-[#298892]">
            DESIGN CLUB - DC24
          </h1>
        </div>
        <div className="flex flex-col items-center py-10">
          <h1 className="text-2xl font-bold md:mb-5">Developers</h1>
          <div className="flex justify-center gap-10 max-md:flex-col max-md:scale-90">
            <div className="flex items-center gap-2 bg-slate-100 rounded-xl shadow-2xl shadow-black">
              <img src={pic1} className="w-[200px] rounded-l-xl" />
              <div className="px-2">
                <h1 className="text-3xl font-bold">Shefaoudeen Z</h1>
                <h1 className="text-[#298892] text-xl font-bold">
                  Development Unit President
                </h1>
                <h1 className="font-bold">ECE'25</h1>
                <div className="flex w-full justify-around pt-4">
                  <a href="https://github.com/Shefaoudeen" target="_blank">
                    <img src={Github} alt="" className="h-[40px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shefaoudeen-z/"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="" className="h-[40px]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center shadow-2xl shadow-black gap-2 bg-slate-100 rounded-xl">
              <img src={pic1} className="w-[200px] rounded-l-xl" />
              <div className="px-2">
                <h1 className="text-3xl font-bold">Pradheep raj S</h1>
                <h1 className="text-[#298892] text-xl font-bold">
                  Development Unit Scretary
                </h1>
                <h1 className="font-bold">CSE'26</h1>
                <div className="flex w-full justify-around pt-4">
                  <a href="https://github.com/Pradheepraj2K4" target="_blank">
                    <img src={Github} alt="" className="h-[40px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pradheepraj/"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="" className="h-[40px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;

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
      <div className="w-full pb-5 flex flex-col justify-center items-center">
        <div className="flex gap-6 flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-[#1e6c93] w-screen text-center py-3 text-white">Website Developed by</h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-10">
            <img src={DC_Logo} alt="" className="w-[200px] mt-5" />
            <h1 className="font-bold text-3xl md:text-5xl pt-5 text-[#298892]">
            DESIGN CLUB - DC24
            </h1>
          </div>
          
        </div>
        <div className="flex flex-col gap-4 items-center py-5 md:py-10 mt-5">
          <h1 className="border-b-2 border-blue-500 text-3xl font-semibold py-1 text-black md:mb-5">Developers</h1>
          <div className="flex justify-center gap-14 md:gap-10 max-md:flex-col max-md:scale-75">
            <div className="flex items-center gap-2 bg-slate-100 rounded-xl shadow-lg shadow-black/50">
              <img src={pic1} className="w-[200px] rounded-l-xl" />
              <div className="px-4">
                <h1 className="text-3xl max-md:text-xl font-bold">
                  Shefaoudeen Z
                </h1>
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
            <div className="flex items-center shadow-lg shadow-black/50 gap-2 bg-slate-100 rounded-xl">
              <img src={pic1} className="w-[200px] rounded-l-xl" />
              <div className="px-4">
                <h1 className="text-3xl font-bold max-md:text-xl">
                  Pradheep raj S
                </h1>
                <h1 className="text-[#298892] text-xl font-bold ">
                  Development Unit Secretary
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

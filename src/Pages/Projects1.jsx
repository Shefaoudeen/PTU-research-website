import React, { useState } from "react";
import Banner from "../Layout/Banner";
import Marquee from "react-fast-marquee";
import { Projects_details } from "../Data/ProjectDetails";
import ProjectInfo from "./ProjectInfo";
import cardsBg from "../assets/Images/cardsBg.jpg";
import { Arrow } from "../assets";
import { Project_dept_Details } from "../Data/Project_dept_Details";

const Project1 = () => {
  const [selectId, setSelectId] = useState(null);
  const [Dept, setDept] = useState(0);
  const [openButton, setOpenButton] = useState(false);

  const changeDept = (index) => {
    setDept(index);
    setOpenButton(!openButton);
  };

  const handleClick = (index) => {
    if (selectId == null) {
      setSelectId(index);
    } else {
      setSelectId(null);
    }
    console.log(selectId);
  };

  return (
    <div className="">
      {" "}
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Projects"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <section className="flex relative justify-center items-center w-screen">
        <div className="absolute z-[10000000] left-10 top-10 text-lg select-none bg-slate-200 rounded-xl max-md:left-5 max-md:scale-90">
          <div
            className="flex bg-blue-500 rounded-xl items-center cursor-pointer"
            onClick={() => setOpenButton(!openButton)}
          >
            <button className="border-none px-3 text-white font-bold py-1 rounded-xl  ">
              Select Dept
            </button>
            <img
              src={Arrow}
              className={`w-[20px] h-[20px] mr-4 ${
                openButton ? "-rotate-90" : "rotate-90"
              } transition-all duration-200`}
            />
          </div>
          <div className="pl-5">
            <ul
              className={`${
                openButton ? "visible" : "hidden"
              } cursor-pointer flex flex-col gap-1 duration-200 ease-linear transition-all py-3`}
            >
              {Project_dept_Details.map((ele, index) => {
                return (
                  <li
                    onClick={() => changeDept(index)}
                    className="hover:font-bold "
                  >
                    {ele.dept}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <section
          className={`grid grid-flow-rows ${
            Project_dept_Details[Dept].projects.length === 1
              ? "grid-cols-1"
              : "grid-cols-2"
          } max-md:grid-cols-1  w-fit py-10 md:gap-10 max-md:pt-20`}
        >
          {Project_dept_Details[Dept].projects.map((ele, index) => {
            return (
              <div className="relative rounded-2xl shadow-black/50 shadow-lg max-md:scale-[80%]">
                <img
                  className="h-28 w-full object-cover rounded-t-xl opacity-85 -z-100"
                  src={cardsBg}
                ></img>
                <div
                  key={index}
                  className="border-2 relative border-slate-400 px-5 max-h-[250px] min-h-[200px] overflow-y-auto md:min-w-[500px] md:max-w-[500px] py-5 border-none "
                >
                  {ele.Title.length < 30 ? (
                    <h1 className="text-2xl font-bold">{ele.Title}</h1>
                  ) : (
                    <Marquee className="w-full">
                      <h1 className="text-2xl font-bold">{ele.Title + "."}</h1>
                    </Marquee>
                  )}
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg text-blue-500 font-bold w-fit flex">
                      {ele.Investigator}
                    </h1>
                    <h1>|</h1>
                    <h1 className="text-lg text-blue-500 font-bold">
                      {ele.Department}
                    </h1>
                  </div>
                  <h1 className="max-md:hidden">{ele.Funding}</h1>
                  <h1 className="md:hidden">{ele.Funding}</h1>
                  <h1 className="md:hidden">Total Fund : {ele.Funds}</h1>
                  <h1 className="md:hidden">Duration : {ele.duration}</h1>
                  <div
                    className="text-lg text-slate-600 cursor-pointer font-bold absolute bottom-4 right-4 max-md:hidden"
                    onClick={() => handleClick(index)}
                  >
                    More Details
                  </div>
                  {selectId === index ? (
                    <ProjectInfo info={ele} setSelectId={setSelectId} />
                  ) : null}
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Project1;

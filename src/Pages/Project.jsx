import React, { useState } from "react";
import Banner from "../Layout/Banner";
import Marquee from "react-fast-marquee";
import { Projects_details } from "../Data/ProjectDetails";
import ProjectInfo from "./ProjectInfo";
import cardsBg from "../assets/Images/cardsBg.jpg";

const Project = () => {
  const [selectId, setSelectId] = useState(null);

  const handleClick = (index) => {
    if (selectId == null) {
      setSelectId(index);
    } else {
      setSelectId(null);
    }
    console.log(selectId);
  };

  return (
    <div>
      {" "}
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Project"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <section className="flex justify-center items-center w-screen">
        <section className="grid grid-flow-rows grid-cols-2  w-fit py-10 gap-10 ">
          {Projects_details.map((ele, index) => {
            return (
              <div className="rounded-2xl shadow-black/50 shadow-lg">
                <img
                  className="h-28 w-full object-cover rounded-t-xl opacity-85"
                  src={cardsBg}
                ></img>
                <div
                  key={index}
                  className="border-2 relative border-slate-400 px-5 max-h-[250px] min-h-[200px] overflow-y-auto min-w-[500px] max-w-[500px] py-5 border-none "
                >
                  {ele.Title.length < 30 ? (
                    <h1 className="text-2xl font-bold">{ele.Title}</h1>
                  ) : (
                    <Marquee>
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
                  <h1>{ele.Funding}</h1>
                  <div
                    className="text-lg text-slate-600 cursor-pointer font-bold absolute bottom-4 right-4"
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

export default Project;

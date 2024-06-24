import React from "react";
import Banner from "../Layout/Banner";
import { Projects_details } from "../Data/ProjectDetails";

const Project = () => {
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
        <section className="grid grid-flow-rows grid-cols-2  w-fit py-5 gap-10 ">
          {Projects_details.map((ele) => {
            return (
              <div className="border-2 border-slate-400 px-5 max-h-[250px] min-h-[250px] overflow-y-auto min-w-[500px] max-w-[500px] py-5 rounded-2xl shadow-black/50 shadow-xl">
                <h1 className="text-2xl font-bold">{ele.Title}</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg text-blue-500 font-bold">
                    {ele.Investigator}
                  </h1>
                  <h1>|</h1>
                  <h1 className="text-lg text-blue-500 font-bold">
                    {ele.Department}
                  </h1>
                </div>
                <div>
                  <h1>{ele.Funding}</h1>
                  <h1>{ele.Type}</h1>

                  <h1>{ele.Funds}</h1>
                  <h1>{ele.duration}</h1>
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

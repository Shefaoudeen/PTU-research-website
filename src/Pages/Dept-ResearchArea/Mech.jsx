import React from "react";
import Banner from "../../Layout/Banner";
import { Mech_Details } from "./Dept-Research-file/MechDetails";

const Mech = () => {
  return (
    <div>
      {" "}
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Research Areas & Facilities"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="bg-[#1e6c93]">
        <div className="py-8 text-white font-semibold md:text-3xl max-md:text-xl md:ml-[200px] max-md:ml-[25px]">
          <h1>Mechanical Department - Research areas and Facilities</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 py-10">
        <div className="md:px-20 max-md:px-10 max-md: text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Mech_Details.description}
          </p>
        </div>
        <div className="flex flex-col w-full py-10 gap-4">
          <h1 className="text-blue-700 text-2xl font-semibold text-center">
            RESEARCH LABORATORIES
          </h1>

          <div className="flex flex-col gap-5">
            <div className="md:px-20 md:text-xl">
              <ul className="list-disc text-justify flex px-10 flex-col gap-4 py-4">
                {Mech_Details.research_lab.map((ele) => {
                  return (
                    <li className="font-normal">
                      <span className="font-semibold">{ele.lab}</span>
                      <span> : </span>
                      <span>{ele.descript}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-blue-700 text-2xl font-semibold text-center">
              COMPUTATIONAL FACILITIES
            </h1>
            <div className="md:px-20 md:text-xl">
              <ul className="list-disc text-justify flex px-10 flex-col gap-4 py-4">
                {Mech_Details.computation_facilities}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-blue-700 text-2xl font-semibold text-center">
              RESEARCH AREAS
            </h1>
            <div className="md:px-20 md:text-xl">
              <ol className="list-decimal text-justify flex px-10 flex-col gap-4 py-4">
                {Mech_Details.research_areas.map((ele) => {
                  return <li className="font-normal">{ele}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mech;

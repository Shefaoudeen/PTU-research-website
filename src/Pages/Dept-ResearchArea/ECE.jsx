import React from "react";
import Banner from "../../Layout/Banner";
import { ECE_Details } from "./Dept-Research-file/ECEDetails";

const ECE = () => {
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
        <div className="py-8 text-white font-semibold md:text-3xl md:ml-[200px] max-md:px-10 max-md:text-xl">
          <h1>
            Electronics and Communication Department - Research areas and
            Facilities
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 py-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <h1 className="text-blue-700 text-2xl font-semibold">
            RESEARCH AREAS
          </h1>
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {ECE_Details.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <h1 className="text-blue-700 md:text-2xl max-md:text-xl font-semibold">
            RESEARCH FACILITES OF THE DEPARTMENT
          </h1>
          <ul className="flex flex-col gap-5 py-5">
            {ECE_Details.research_facilites.map((ele, index) => {
              return (
                <li>
                  <span className="font-semibold">
                    {index + 1}.{ele.lab}
                  </span>
                  <span> </span>
                  <span>{ele.descript}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ECE;

import React from "react";
import Banner from "../../Layout/Banner";
import { ECE_Details } from "./Dept-Research-file/ECEDetails";
import { CSE_Details } from "./Dept-Research-file/CSEDetails";

const CSE = () => {
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
        <div className="py-8 text-white font-semibold md:text-3xl max-md:text-xl md:ml-[200px] max-md:px-10">
          <h1>Computer Science Department - Research areas and Facilities</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 py-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {CSE_Details.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10 w-screen">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify w-full">
          <h1 className="text-blue-700 text-2xl font-semibold">
            RESEARCH FACILITES
          </h1>
          <ul className="flex flex-col gap-5 py-5">
            {CSE_Details.research_facilites.map((ele, index) => {
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
          <p>
            Other lab such as web technology lab, problem solving, and computer
            Centre provides research scholars with additional computing
            facilities to do research and other documentation works.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <h1 className="text-blue-700 md:text-2xl max-md:text-xl font-semibold">
            RESEARCH AREAS
          </h1>
          <ul className="flex flex-col gap-5 py-5">
            {CSE_Details.research_Areas.map((ele, index) => {
              return (
                <li>
                  <span className="font-semibold">
                    {index + 1}.{ele.area}
                  </span>
                  <span> </span>
                  <span>{ele.descript}</span>
                </li>
              );
            })}
          </ul>
          <p>
            Department of Computer Science and Engineering offers a vibrant
            research ecosystem supported by research facilities and covering a
            diverse range of research areas of Computer Science and Engineering.
            The researchers in the department continue to push the boundaries,
            driving technological advancement and societal impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSE;

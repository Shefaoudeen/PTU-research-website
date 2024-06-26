import React from "react";
import Banner from "../../Layout/Banner";
import { Chemical_Details } from "./Dept-Research-file/ChemicalDetails";

const Chem = () => {
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
          <h1>Chemical Department - Research areas and Facilities</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 py-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Chemical_Details.description1}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <ol className="flex flex-col md:gap-5 max-md:gap-2 px-10 list-decimal">
            {Chemical_Details.research_areas.map((ele, index) => {
              return (
                <li key={index}>
                  <span className="font-normal">{ele}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Chemical_Details.description2}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10 py-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <div className=" md:text-lg flex flex-col md:gap-3 max-md:gap-2 text-justify">
            <p>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              The department has excellent infrastructure to support and inspire
              students to take up research activities in various
              specializations. Listed below are the state of the art facilities
              available in the department:
            </p>
          </div>
          <ul className="flex flex-col md:gap-5 max-md:gap-3 px-10 list-disc">
            {Chemical_Details.facilities.map((ele, index) => {
              return (
                <li key={index}>
                  <span className="font-normal">{ele}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Chemical_Details.description3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chem;

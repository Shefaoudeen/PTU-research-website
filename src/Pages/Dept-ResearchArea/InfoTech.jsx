import React from "react";
import Banner from "../../Layout/Banner";
import { IT_Details } from "./Dept-Research-file/ITDetails";

const InfoTech = () => {
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
        <div className="py-8 text-white font-semibold text-3xl ml-[200px]">
          <h1>
            Information Technology Department - Research areas and Facilities
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center px-20 py-10">
        <div className="px-20 text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {IT_Details.description1}
          </p>
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {IT_Details.description2}
          </p>
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {IT_Details.description3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoTech;

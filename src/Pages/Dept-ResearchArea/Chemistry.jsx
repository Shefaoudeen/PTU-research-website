import React from "react";
import Banner from "../../Layout/Banner";
import { Chemical_Details } from "./Dept-Research-file/ChemicalDetails";
import { Chemistry_Details } from "./Dept-Research-file/Chemistry_Details";

const Chemistry = () => {
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
          <h1>Chemistry Department - Research areas and Facilities</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 py-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Chemistry_Details.description1}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-1.5 text-justify">
          <ol className="flex flex-col gap-1.5 px-10 list-decimal">
            {Chemistry_Details.research.map((ele, index) => {
              return (
                <li>
                  <span className="font-normal">{ele}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10">
        <div className="md:px-20 mdtext-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Chemistry_Details.description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chemistry;

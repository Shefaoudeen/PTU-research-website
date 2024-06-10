import React from "react";
import Banner from "../Layout/Banner";

const ResAreas = () => {
  return (
    <div>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Research Areas & Facilities"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="bg-[#1e6c93] mb-10 ">
        <div className="py-8 text-white font-semibold text-3xl ml-[200px]">
          <h1>Department - Research areas and Facilities</h1>
        </div>
      </div>
    </div>
  );
};

export default ResAreas;

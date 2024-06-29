import React from "react";
import Banner from "../../Layout/Banner";
import { EEE_details } from "./Dept-Research-file/EEEDetails";

const EEE = () => {
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
        <div className="py-8 text-white font-semibold md:text-3xl md:ml-[200px] max-md:px-5 max-md:text-xl">
          <h1>
            Electrical and Electronics Department - Research areas and
            Facilities
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 py-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {EEE_details.description1}
          </p>
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {EEE_details.description2}
          </p>
          <p>
            The research is funded by various Indian funding agencies such as
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-20 pb-10">
        <div className="md:px-20 md:text-lg flex flex-col md:gap-3 text-justify">
          <ul className="flex flex-col md:gap-5 gap-2 px-10 list-disc">
            {EEE_details.funds.map((ele, index) => {
              return (
                <li key={index}>
                  <span className="font-normal">{ele}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {EEE_details.description3}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10 py-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <div className=" md:text-lg flex flex-col gap-3 text-justify">
            <p>The research interests of the faculty members include</p>
          </div>
          <ul className="flex flex-col md:gap-5 max-md:gap-2 px-10 list-disc">
            {EEE_details.research_interest.map((ele, index) => {
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
            {EEE_details.description4}
          </p>
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {EEE_details.description5}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10">
        <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify">
          <ul className="flex flex-col md:gap-5 gap-2 px-10 list-disc">
            {EEE_details.facilities.map((ele, index) => {
              return (
                <li>
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
            {EEE_details.description6}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EEE;

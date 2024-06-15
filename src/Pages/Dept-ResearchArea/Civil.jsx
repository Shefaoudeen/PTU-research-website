import React from "react";
import Banner from "../../Layout/Banner";
import { Civil_details } from "./Dept-Research-file/CivilDetails";

const Civil = () => {
  return (
    <div>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Research Areas & Facilities"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="bg-[#1e6c93]">
        <div className="py-8 text-white font-semibold text-3xl ml-[200px]">
          <h1>Civil Department - Research areas and Facilities</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center px-20 py-10">
        <div className="px-20 text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Civil_details.description1}
          </p>
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Civil_details.description2}
          </p>
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Civil_details.description3}
          </p>
        </div>
        <div className="flex flex-col w-full py-10 gap-2">
          <h1 className="text-blue-700 text-2xl font-semibold text-center">
            LIST OF MAJOR EQUIPMENTS
          </h1>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-center">
              MATERIALS TESTING AND EVALUATION LABORATORY - I
            </h1>
            <div className="px-20 text-xl">
              <ol className="list-decimal flex flex-col gap-1.5">
                {Civil_details.materialTesting1.map((ele) => {
                  return (
                    <li className="font-normal">
                      <p>{ele}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-center">
              MATERIALS TESTING AND EVALUATION LABORATORY - II
            </h1>
            <div className="px-20 text-xl">
              <ol className="list-decimal flex flex-col gap-1.5">
                {Civil_details.materialTesting2.map((ele) => {
                  return (
                    <li className="font-normal">
                      <p>{ele}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-center">
              CONCRETE LABORATORY
            </h1>
            <div className="px-20 text-xl">
              <ol className="list-decimal flex flex-col gap-1">
                {Civil_details.concreteLab.map((ele) => {
                  return (
                    <li className="font-normal">
                      <p>{ele}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-center">
              IMPORTANT EQUIPMENT AVAILABLE
            </h1>
            <div className="px-20 text-xl">
              <ol className="list-decimal flex flex-col gap-1">
                {Civil_details.important.map((ele) => {
                  return (
                    <li className="font-normal">
                      <p>{ele}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-center">
              GEOTECHNICAL ENGINEERING LAB
            </h1>
            <div className="px-20 text-xl">
              <ol className="list-decimal flex flex-col gap-1">
                {Civil_details.geotechnical.map((ele) => {
                  return (
                    <li className="font-normal">
                      <p>{ele}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-center">
              SURVEY LABORATORY
            </h1>
            <div className="px-20 text-xl">
              <ol className="list-decimal flex flex-col gap-1">
                {Civil_details.surveylab.map((ele) => {
                  return (
                    <li className="font-normal">
                      <p>{ele}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-center">
              ENVIRONEMNTAL LAORATORY
            </h1>
            <div className="px-20 text-xl">
              <ol className="list-decimal flex flex-col gap-1">
                {Civil_details.environmentalLab.map((ele) => {
                  return (
                    <li className="font-normal">
                      <p>{ele}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-center">
              LIST OF MAJOR EQUIPMENTS
            </h1>
            <div className="px-20 text-xl">
              <ol className="list-decimal flex flex-col gap-1">
                {Civil_details.majorEquipments.map((ele) => {
                  return (
                    <li className="font-normal">
                      <p>{ele}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Civil;

import React from "react";
import Banner from "../Layout/Banner";
import { regulation, thesis, synopsisForms } from "../Data/Downloads.js";

const Download = () => {
  return (
    <>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Downloads"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className=" p-20 flex justify-around items-center flex-wrap gap-y-6 shadow-md gap-8">
        <div className="flex flex-col items-center gap-4 ">
          <div className="sm:w-80 shadow-lg w-64">
            <img alt={regulation.title} src={regulation.thumbnail}></img>
          </div>
          <div className="flex flex-col  items-center">
            <h2 className="text-2xl py-4 text-center">{regulation.title}</h2>
            <a href={regulation.link} target="_blank">
              <h2 className="py-2 px-4 bg-blue-500 rounded-full text-xl text-white max-w-fit shadow-md hover:scale-105 duration-300">
                Download
              </h2>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="sm:w-80 w-64 shadow-lg">
            <img alt={thesis.title} src={thesis.thumbnail}></img>
          </div>
          <div className="flex flex-col  items-center">
            <h2 className="text-2xl py-4 text-center">{thesis.title}</h2>
            <a href={thesis.link} target="_blank">
              <h2 className="py-2 px-4 bg-blue-500 rounded-full text-xl text-white max-w-fit shadow-md hover:scale-105 duration-300">
                Download
              </h2>
            </a>
          </div>
        </div>
      </div>


      <div className="mt-8">
        <h1 className="text-4xl text-blue-800 text-center font-semibold">
          Synopsis Forms
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-y-4 divide-x-2 grid-flow-column">
          {synopsisForms.map((form, index) => {
            return (
              <div key={index} className={`py-4 px-8 flex gap-4 flex-wrap md:flex-nowrap justify-center gap-y-5 md:justify-between items-center bg-slate-100`}>
                
                <div className="w-48 shadow-lg flex-shrink md:flex-shrink-0">
                  <img className="rounded-md" src={form.thumnail} alt={form.title} />
                </div>

                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <h2 className="text-xl p-2 md:text-2xl max-w-full text-center text-wrap">{form.title}</h2>
                  <a href={form.link} target="_blank">
                    <h2 className="py-2 px-4 bg-blue-500 rounded-full text-xl text-white max-w-fit shadow-md hover:scale-105 duration-300">
                      Download
                    </h2>
                  </a>
                </div>

                <div />
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Download;

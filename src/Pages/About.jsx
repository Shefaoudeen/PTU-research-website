import React from "react";
import Banner from "../Layout/Banner";
import { PTU1 } from "../assets";

const About = () => {
  return (
    <div>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"About Us"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="flex justify-center items-center gap-2 px-5 py-10 max-md:flex-col">
        <div className="md:min-w-[650px] max-md:w-[100%] flex flex-col justify-center items-start">
          <img
            src={PTU1}
            alt="PTU - PHOTO"
            className="rounded-md shadow-lg md:shadow-2xl shadow-black/50"
          />
        </div>
        <div className="md:px-10">
          <div className=" pb-1 w-fit max-md:hidden">
            <h1 className="text-3xl font-bold">About Us</h1>
          </div>
          <p className="text-xl mt-5 leading-8 max-md:text-lg text-justify">
            Puducherry Technological University (PTU), the first Technological
            University of Government of Puducherry, established in the year 2020
            by up gradation of erstwhile Pondicherry Engineering College (PEC),
            a premier institution of more than 30 years of standing in imparting
            quality undergraduate and postgraduate education in Engineering and
            Technology. For more details, visit{" "}
            <a href="https://ptuniv.edu.in/" className="text-blue-600">
              www.ptuniv.edu
            </a>
          </p>
          <p className="text-xl mt-5 leading-8 max-md:text-lg text-justify">
            The institution was upgraded to the status of Technological
            University with the approval of UGC with effect from 5th September,
            2020 and was renamed as Puducherry Technological University (PTU).
            This marked an important milestone in the evolution of this
            institution. Therefore Admission to the Ph. D programmes are
            directly undertaken by PTU with effect from the
            academic year 2021-22.
          </p>
          <p className="text-xl mt-5 leading-8 max-md:text-lg text-justify">
            The institute became QIP(Quality Improvement Programme) Minor
            research centre from 2013 . University offers admission to Ph.D
            programme under QIP programme, and NDF( National Doctoral
            Fellowship) , ADF ( AICTE Doctoral Fellowship) , Visveswaraya Scheme
            and visveswaraya scheme
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

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
      <div className="flex px-5 py-10">
        <div className="min-w-[650px]">
          <img
            src={PTU1}
            alt="PTU - PHOTO"
            width={650}
            className="rounded-2xl shadow-2xl shadow-black/50"
          />
        </div>
        <div className="px-10">
          <div className="border-b-2 border-b-blue-600 pb-1 w-fit">
            <h1 className="text-3xl font-bold">About Us</h1>
          </div>
          <p className="text-xl mt-5 leading-8">
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
        </div>
      </div>
    </div>
  );
};

export default About;

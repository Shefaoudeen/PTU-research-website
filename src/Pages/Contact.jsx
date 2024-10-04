import React from "react";
import { contact_Details } from "../Data/ContactUs";
import Banner from "../Layout/Banner";

const Contact = () => {
  return (
    <>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Contact Us"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="mt-5">
        <h1 className="text-3xl mx-auto font-semibold py-1 w-fit border-b-[3px] border-blue-400">
          Contact Us
        </h1>
        {contact_Details.map((faculty, index) => {
          return (
            <div
              key={index}
              className={`flex mt-5 flex-wrap items-center gap-16 justify-center md:justify-start pl-4 md:pl-40 py-8 bg-[${faculty.bgColor}]`}
            >
              <div>
                <img
                  src={faculty.profile}
                  alt="profile picture"
                  className="max-w-[175px] min-h-[175px] min-w-[175px] max-h-[175px] sm:w-52 rounded-full object-cover"
                />
              </div>
              <div className={`pr-8 text-${faculty.textColor}`}>
                <a href={faculty.link} target="_blank">
                  <h1 className="text-xl sm:text-2xl p-1 font-semibold hover:underline">
                    {faculty.name}
                  </h1>
                </a>
                <h1 className="text-xl sm:text-2xl p-1">
                  {faculty.designation},
                </h1>
                <h1 className="text-xl sm:text-2xl p-1">{faculty.clgName}.</h1>
                <h1 className={`text-xl sm:text-2xl p-1`}>
                  {faculty.email && `Email : ${faculty.email}`}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contact;

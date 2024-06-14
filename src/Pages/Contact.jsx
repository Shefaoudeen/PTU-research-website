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
      <div className="">
        <h1 className="text-3xl font-bold py-10 ml-40">Contact Us</h1>
        {contact_Details.map((faculty, index) => {
          return (
            <div
              key={index}
              className={`flex flex-wrap items-center gap-16 justify-center md:justify-start pl-4 md:pl-40 py-8 bg-[${faculty.bgColor}]`}
            >
              <div>
                <img
                  src={faculty.profile}
                  alt="profile picture"
                  className="w-52 rounded-full"
                />
              </div>
              <div className={`pr-8 text-${faculty.textColor}`}>
                <h1 className="text-2xl p-1">
                  {faculty.name}
                </h1>
                <h1 className="text-2xl p-1">
                  {faculty.designation},
                </h1>
                <h1 className="text-2xl p-1">
                  {faculty.clgName}.
                </h1>
                <h1 className={`text-2xl p-1`}>
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

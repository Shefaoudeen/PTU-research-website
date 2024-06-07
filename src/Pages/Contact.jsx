import React from "react";
import { contact_Details } from "../Data/ContactUs";
const Contact = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold py-10 ml-40">Contact Us</h1>
        {contact_Details.map((faculty,index) => {
          return <div key={index} className={`flex items-center gap-16 pl-40 py-8 bg-[${faculty.bgColor}]`}>
              <div><img src={faculty.profile} alt="profile picture" className="w-52 rounded-full" /></div>
              <div className="pr-8">
                <h1 className={`text-2xl p-1 text-${faculty.textColor} `}>{faculty.name}</h1>
                <h1 className={`text-2xl p-1 text-${faculty.textColor} `}>{faculty.designation}</h1>
                <h1 className={`text-2xl p-1 text-${faculty.textColor} `}>{faculty.clgName}</h1>
                <h1 className={`text-2xl p-1 text-${faculty.textColor} `}>{faculty.email && `Email : ${faculty.email}`}</h1>
              </div>
          </div>;
        })}
      </div>
    </>
  );
};

export default Contact;

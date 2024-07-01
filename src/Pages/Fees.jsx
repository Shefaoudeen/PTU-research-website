import React from "react";
import Banner from "../Layout/Banner";
import { feeDetails } from "../Data/feeDetails";

const Fees = () => {
  return (
    <div>
      {" "}
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Fees particulars"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="p-4">
        <h1 className="text-3xl text-center mt-10 p-1 text-blue-800 font-semibold">
          Fee Structure for Ph.D Scholars
        </h1>
        <div className="mt-10 py-4 px-2 sm:px-10 md:px-20 lg:px-32">
          {feeDetails.map((ele, index) => {
            return (
              <div
                className={`flex gap-4 flex-wrap md:flex-nowrap justify-center md:justify-between items-center px-10 py-10 rounded-md ${
                  index % 2 === 0 ? "bg-slate-100" : ""
                }`}
                key={index}
              >
                <div className="flex flex-col items-center gap-5">
                  <h2 className="text-xl text-center">For Scholars admitted from the academic year</h2>
                  <h2 className="bg-blue-500 px-4 py-3 rounded-full text-white shadow-md">{`${
                    ele.from
                  } ${ele.to ? "to " + ele.to : ""}`}</h2>
                </div>
                <div className=" text-xl pl-5">
                  <div className="flex gap-20 justify-between py-4">
                    <h2>I Year</h2>
                    <h2 className="font-semibold">Rs.{ele.year1}</h2>
                  </div>
                  <div className="flex gap-20 justify-between py-4 items-center">
                    <h2>II Year onwards</h2>
                    <h2 className="font-semibold">Rs.{ele.fromYear2}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fees;

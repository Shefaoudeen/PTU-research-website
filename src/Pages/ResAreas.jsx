import React, { useState } from "react";
import Banner from "../Layout/Banner";
import arrowIcon from "../assets/icons/arrow-icon.svg";
import { All_Dept } from "./Dept-ResearchArea/Dept-Research-file/AllDept";
import { Link } from "react-router-dom";

const Supervisors1 = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  const handleOnClick = (element) => {
    accordionOpen === element
      ? setAccordionOpen(null)
      : setAccordionOpen(element);
    console.log(accordionOpen);
  };

  return (
    <div className="select-none">
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Research Areas  & Facilities"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div>
        <div className="flex items-center justify-center bg-[#1e6c93] text-white text-2xl py-8 px-6 font-semibold">
          <h1 className="w-[80vw]">
            Department - Research areas and Facilities
          </h1>
        </div>
        {/* accordian section */}
        <div className="w-[75vw] m-auto py-5">
          {All_Dept.map((ele) => {
            return (
              <div className="border-[#1e6c93] border-b-2 py-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleOnClick(ele.id)}
                >
                  <h1 className="text-[#1e6c93] font-semibold text-xl py-5">
                    {ele.dept}
                  </h1>
                  <div className="pr-4">
                    <img
                      src={arrowIcon}
                      className={`w-4 duration-300 ${
                        accordionOpen == ele.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="flex w-full justify-center">
                  {accordionOpen === ele.id ? (
                    <div
                      className={`w-full flex flex-col text-justify ${
                        accordionOpen !== ele.id ? "max-h-0" : "h-fit"
                      } transition-all duration-1000 ease-linear`}
                    >
                      {ele.next_page ? (
                        <div>
                          <p className="text-lg">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            {ele.short_content}
                          </p>
                          <div className="relative h-[40px]">
                            <Link to={ele.path_link}>
                              <p
                                href=""
                                className="absolute right-0 mt-1 text-blue-600 font-bold text-xl"
                              >
                                More details...
                              </p>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p>{ele.content}</p>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Supervisors1;

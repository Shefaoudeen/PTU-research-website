import React, { useState } from "react";
import Banner from "../Layout/Banner";
import arrowIcon from "../assets/Images/icons/arrow-icon.svg";
import { Supervisors_dept } from "../Data/Supervisors-dept";

const Supervisors1 = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  const handleOnClick = (element) => {
    accordionOpen === element
      ? setAccordionOpen(null)
      : setAccordionOpen(element);
    console.log(accordionOpen);
  };

  return (
    <>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Recognized Supervisors"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div>
        <div className="flex items-center justify-center bg-[#1e6c93] text-white text-2xl py-8 px-6 font-semibold">
          <h1 className="w-[80vw]">
            Recognized Supervisors of Puducherry Technological University (PTU)
            and Perunthalaivar Kamarajar Institute of Engineering and Technology
            (PKIET)
          </h1>
        </div>
        {/* accordian section */}
        <div className="w-[75vw] m-auto py-5">
          {Supervisors_dept.map((ele) => {
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
                      className={`w-full text-center flex flex-col justify-center ${
                        accordionOpen !== ele.id ? "max-h-0" : "h-fit"
                      } transition-all duration-1000 ease-linear`}
                    >
                      <h1 className="text-xl font-semibold py-4">
                        Recognized Supervisors from PTU with specialization
                      </h1>
                      <div className="px-2 flex justify-center w-full">
                        <table className="w-full border-separate border-spacing-3">
                          {ele.ptu.map((staff, index) => {
                            return (
                              <tr className="bg-slate-100">
                                <th className="font-normal">{index + 1}</th>
                                <th className="font-normal w-[17vw]">
                                  {staff.faculty}
                                </th>
                                <th className="font-normal w-[17vw]">
                                  {staff.role}
                                </th>
                                <th className="font-normal w-[40vw] p-2">
                                  {staff.areas}
                                </th>
                              </tr>
                            );
                          })}
                        </table>
                      </div>
                      <div className="w-full text-center flex flex-col justify-center">
                        {ele.pkiet_status ? (
                          <div className="w-full text-center flex flex-col justify-center">
                            <h1 className="text-xl font-semibold py-4">
                              Recognized Supervisors from PKIET with
                              specialization
                            </h1>
                            <div className="px-2 flex justify-center w-full">
                              <table className="border-separate border-spacing-3 w-full">
                                {ele.pkiet.map((staff, index) => {
                                  return (
                                    <tr className="bg-slate-100">
                                      <th className="font-normal p-2">
                                        {index + 1}
                                      </th>
                                      <th className="font-normal w-[17vw]">
                                        {staff.faculty}
                                      </th>
                                      <th className="font-normal w-[17vw]">
                                        {staff.role}
                                      </th>
                                      <th className="font-normal w-[40vw] p-2">
                                        {staff.areas}
                                      </th>
                                    </tr>
                                  );
                                })}
                              </table>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Supervisors1;

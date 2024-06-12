import React, { useState } from "react";
import Banner from "../Layout/Banner";
import arrowIcon from "../assets/Images/icons/arrow-icon.svg";

const Supervisors = () => {
  const [accordionOpen, setAccordionOpen] = useState(0);
  const handleOnClick = (element) => {
    accordionOpen === element.id
      ? setAccordionOpen(0)
      : setAccordionOpen(element.id);
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
          <h1 className="w-[80vw]">Recognized Supervisors of Puducherry Technological University (PTU)
          and Perunthalaivar Kamarajar Institute of Engineering and Technology
          (PKIET)</h1>
          
        </div>
        {/* accordian section */}
        <div className="w-[80vw] m-auto">
          <div className="py-8">
            <div
              onClick={(e) => handleOnClick(e.currentTarget)}
              id="1"
              className={`cursor-pointer text-[#1e6c93] border-[#1e6c93] border-b-2 p-4 text-3xl flex justify-between select-none`}
            >
              <h2>Civil Engineering</h2>
              <img
                className={`${
                  accordionOpen == 1 ? "rotate-180" : ""
                } w-5 duration-300`}
                src={arrowIcon}
              ></img>
            </div>
            <div
              className={`${
                accordionOpen == 1 ? "block" : "hidden"
              } p-4 text-lg`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ullam quia recusandae consectetur voluptas, ipsa nostrum qui
              quaerat eum iste cumque voluptatum earum minus corporis
              necessitatibus odit laudantium distinctio, veniam officia
              accusamus doloremque optio obcaecati doloribus dolor? Ducimus
              maxime cumque exercitationem autem eligendi corporis, ipsa minima
              repellat consequatur mollitia praesentium.
            </div>
          </div>
          <div className="py-8">
            <div
              onClick={(e) => handleOnClick(e.currentTarget)}
              id="2"
              className={`cursor-pointer text-[#1e6c93] border-[#1e6c93] border-b-2 p-4 text-3xl flex justify-between select-none`}
            >
              <h2>Mechanical Engineering</h2>
              <img
                className={`${
                  accordionOpen == 2 ? "rotate-180" : ""
                } w-5 duration-300`}
                src={arrowIcon}
              ></img>
            </div>
            <div
              className={`${
                accordionOpen == 2 ? "block" : "hidden"
              } p-4 text-lg`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ullam quia recusandae consectetur voluptas, ipsa nostrum qui
              quaerat eum iste cumque voluptatum earum minus corporis
              necessitatibus odit laudantium distinctio, veniam officia
              accusamus doloremque optio obcaecati doloribus dolor? Ducimus
              maxime cumque exercitationem autem eligendi corporis, ipsa minima
              repellat consequatur mollitia praesentium.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supervisors;

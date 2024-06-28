import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1e6c93] h-[30vh] text-white p-5 flex items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-2xl">Maintained by</h1>
          <div className="flex flex-col items-center justify-center text-2xl mt-6">
            <h1 className="mb-1 font-semibold">
              Directorate of Academic Research
            </h1>
            <h1>Puducherry Technological University</h1>
            <h1>Puducherry-6050144.</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#354146] p-2">
        <a href="https://ptu-designclub.netlify.app/" target="_blank"><h1 className="text-xl text-center font-semibold text-white">Developed by Design Club, PTU</h1></a>
      </div>
    </>
  );
};

export default Footer;

import React from "react";

const ProjectInfo = ({ info, setSelectId }) => {
  return (
    <div className="w-screen select-none fixed h-screen top-0 left-0 bg-slate-400/40 z-[100] flex justify-center items-center">
      <div className="md:min-w-[1000px] relative min-h-[400px] rounded-2xl px-5 border-b-8 border-gray-500 bg-white opacity-100 flex items-center flex-col py-5 text-xl">
        <div
          onClick={() => setSelectId(null)}
          className="absolute right-8 top-8 cursor-pointer text-2xl font-bold text-gray-800"
        >
          x
        </div>
        <div className="py-5 text-2xl font-bold ">
          <h1>Project Details</h1>
        </div>
        <table className="w-full border-separate border-spacing-3 text-start">
          <tr className="bg-gray-200">
            <th className=" text-start px-4 py-2 min-w-[240px]">Title</th>
            <th className="font-normal text-start px-4">{info.Title}</th>
          </tr>
          <tr className="bg-gray-200">
            <th className=" text-start px-4 py-2">Principal Investigator</th>
            <th className="font-normal text-start px-4 ">
              {info.Investigator} ({info.Department})
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className=" text-start px-4 py-2">Funding agency </th>
            <th className="font-normal text-start px-4">
              {info.Funding} ({info.Type})
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className=" text-start px-4 py-2">Funds provided </th>
            <th className="font-normal text-start px-4">{info.Funds}</th>
          </tr>
          <tr className="bg-gray-200">
            <th className=" text-start px-4 py-2">Duration </th>
            <th className="font-normal text-start px-4">{info.duration}</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProjectInfo;

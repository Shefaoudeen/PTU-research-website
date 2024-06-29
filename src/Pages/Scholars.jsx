import React, { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Banner from "../Layout/Banner";
import { barchartData } from "../Data/Scholars";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scholars_Details } from "../Data/Scholars_details";
import arrowIcon from "../assets/icons/arrow-icon.svg";
import { Arrow } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const Scholars = () => {
  const [year, setYear] = useState(0);
  const [openButton, setOpenButton] = useState(false);

  const changeYear = (index) => {
    setYear(index);
    setOpenButton(!openButton);
  };

  const [barChartVisible, setBarChartVisible] = useState(false);
  const barChartRef = useRef(null);

  useEffect(() => {
    if (barChartRef != null) {
      ScrollTrigger.create({
        trigger: barChartRef.current,
        start: "top center",
        onToggle: () => setBarChartVisible(true),
      });
    }
  }, [barChartRef]);
  return (
    <>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Scholars Centre"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      {/* barChart section  */}
      <h1 className="mx-auto text-center text-2xl font-semibold my-12 px-8">
        No. of Ph.Ds awarded for last 10 years
      </h1>
      <div className="h-[60vh] md:h-[90vh] w-[95vw] -translate-x-5 sm:w-[80vw] py-10 md:p-20 mx-auto">
        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%" ref={barChartRef}>
            <BarChart
              width={1000}
              height={400}
              data={barchartData}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <text x={350} y={15} fontWeight="bold" fontSize="20">
                No. of Ph.Ds awarded for last 10 years
              </text> */}

              {/* renders the bars only when the bars are in view */}
              {barChartVisible ? (
                <Bar
                  dataKey="scholars"
                  fill="#4682B4"
                  barSize={30}
                  animationDuration={1000}
                />
              ) : null}

              <XAxis dataKey="name" />
              <YAxis dataKey="scholars" ticks={[0, 10, 20, 30, 40, 50]} />
              <Tooltip cursor={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* end of barChart Section  */}
      <div className="md:px-40 relative select-none">
        <div className="absolute  text-lg select-none bg-slate-200 rounded-xl max-md:left-5 max-md:scale-90">
          <div
            className="flex bg-blue-500 rounded-xl items-center cursor-pointer"
            onClick={() => setOpenButton(!openButton)}
          >
            <button className="border-none px-3 text-white font-bold py-1 rounded-xl  ">
              Select Year
            </button>
            <img
              src={Arrow}
              className={`w-[20px] h-[20px] mr-4 ${
                openButton ? "-rotate-90" : "rotate-90"
              } transition-all duration-200`}
            />
          </div>
          <div className="pl-5">
            <ul
              className={`${
                openButton ? "visible" : "hidden"
              } cursor-pointer flex flex-col gap-1 duration-200 ease-linear transition-all py-3`}
            >
              <li onClick={() => changeYear(0)} className="hover:font-bold ">
                2020-21
              </li>
              <li onClick={() => changeYear(1)} className="hover:font-bold">
                2021-22
              </li>
              <li onClick={() => changeYear(2)} className="hover:font-bold">
                2022-23
              </li>
              <li onClick={() => changeYear(3)} className="hover:font-bold">
                2023-24
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-2xl py-5 text-blue-500 font-bold max-md:pt-12">
          {Scholars_Details[year].year} - {Scholars_Details[year].year + 1}{" "}
          Batch
        </div>
        <div className="flex flex-col items-center justify-center">
          {Scholars_Details[year].details.map((ele, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-full gap-3 md:text-xl mb-10 text-sm"
              >
                <div className="font-bold md:text-2xl text-lg">{ele.dept}</div>
                <div className="w-full flex flex-col gap-2 items-center justify-center">
                  <div className="flex gap-1  md:min-w-[50%] md:max-w-[50%] text-center px-2 py-1 max-md:min-w-[75%] max-md:max-w-[75%]">
                    <div className="w-[10%] bg-slate-400 p-1">No.</div>
                    <div className="w-[40%] bg-slate-400 p-1">Register No</div>
                    <div className="w-[60%] bg-slate-400 p-1">
                      Name of the Scholar
                    </div>
                  </div>
                  {ele.scholar.map((e, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex gap-1  md:min-w-[50%] md:max-w-[50%] max-md:min-w-[75%] max-md:max-w-[75%] text-center group px-2 duration-200 hover:scale-110 transition-all ease-linear"
                      >
                        <div className="w-[10%] bg-slate-200 py-1 group-hover:bg-slate-300 duration-100 transition-all ease-linear p-1">
                          {ind + 1}
                        </div>
                        <div className="w-[40%] bg-slate-200 group-hover:bg-slate-300 duration-100 transition-all ease-linear p-1">
                          {e.reg_no}
                        </div>
                        <div className="w-[60%] bg-slate-200 group-hover:bg-slate-300 duration-100 transition-all ease-linear p-1">
                          {e.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Scholars;

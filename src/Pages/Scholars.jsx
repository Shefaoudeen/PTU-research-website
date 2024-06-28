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
      <div className="h-[60vh] md:h-[90vh] w-[90vw] sm:w-[80vw] py-10 md:p-20 mx-auto">
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
                  fill="#8884d8"
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
      <div className="px-40 relative select-none">
        <div className="absolute  text-lg select-none bg-slate-200/75 rounded-xl">
          <div
            className="flex bg-blue-400 rounded-xl items-center cursor-pointer"
            onClick={() => setOpenButton(!openButton)}
          >
            <button className="border-none px-3 text-white font-bold py-1 rounded-xl bg-blue-400 ">
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
              } cursor-pointer flex flex-col gap-1 duration-200 ease-linear transition-all`}
            >
              <li
                onClick={() => changeYear(0)}
                className="hover:font-bold transition-all duration-200 ease-linear"
              >
                2020-21
              </li>
              <li
                onClick={() => changeYear(1)}
                className="hover:font-bold transition-all duration-200 ease-linear"
              >
                2021-22
              </li>
              <li
                onClick={() => changeYear(2)}
                className="hover:font-bold transition-all duration-200 ease-linear"
              >
                2022-23
              </li>
              <li
                onClick={() => changeYear(3)}
                className="hover:font-bold transition-all duration-200 ease-linear"
              >
                2023-24
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-2xl py-5 text-blue-400 font-bold">
          {Scholars_Details[year].year} - {Scholars_Details[year].year + 1}{" "}
          Batch
        </div>
        <div className="flex flex-col items-center justify-center">
          {Scholars_Details[year].details.map((ele, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-full gap-3 text-xl mb-10"
              >
                <div className="font-bold text-2xl">{ele.dept}</div>
                <div className="w-full flex flex-col gap-2 items-center justify-center">
                  <div className="flex gap-1  min-w-[50%] max-w-[50%] text-center px-2 py-1">
                    <div className="w-[10%] bg-slate-400 py-1">S.No</div>
                    <div className="w-[40%] bg-slate-400 ">Register No</div>
                    <div className="w-[60%] bg-slate-400">
                      Name of the Scholar
                    </div>
                  </div>
                  {ele.scholar.map((e, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex gap-1  min-w-[50%] max-w-[50%] text-center group px-2 duration-200 hover:scale-110 transition-all ease-linear"
                      >
                        <div className="w-[10%] bg-slate-200 py-1 group-hover:bg-slate-300 duration-100 transition-all ease-linear">
                          {ind + 1}
                        </div>
                        <div className="w-[40%] bg-slate-200 group-hover:bg-slate-300 duration-100 transition-all ease-linear">
                          {e.reg_no}
                        </div>
                        <div className="w-[60%] bg-slate-200 group-hover:bg-slate-300 duration-100 transition-all ease-linear">
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

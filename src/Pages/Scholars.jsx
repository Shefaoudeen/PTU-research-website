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

gsap.registerPlugin(ScrollTrigger);

const Scholars = () => {
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
              <text x={350} y={15} fontWeight="bold" fontSize="20">
                No. of Ph.Ds awarded for last 10 years
              </text>

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
      <div className="px-40">
        <div className="bg-slate-400">shefa</div>
      </div>
    </>
  );
};

export default Scholars;

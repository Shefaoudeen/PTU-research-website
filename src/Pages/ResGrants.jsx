import React, { useRef, useEffect, useState } from "react";
import Banner from "../Layout/Banner";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BARCHART_DETAILS } from "../Data/ResearchGrants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ResGrants = () => {
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
      {" "}
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Research Grants"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <h1 className="mx-auto text-center text-2xl font-semibold my-12 px-12">
        Research grants received from Departments, PTU (in Lakhs)
      </h1>
      <div className="h-[60vh] md:h-[90vh] w-[95vw] sm:w-[80vw] py-10 md:p-20 ">
        <div className="h-full md:w-[80%]">
          <ResponsiveContainer width="100%" height="100%" ref={barChartRef}>
            <BarChart
              width={1000}
              height={400}
              data={BARCHART_DETAILS}
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
                  dataKey="grants_received"
                  fill="#4682B4"
                  barSize={40}
                  animationDuration={1000}
                />
              ) : null}

              <XAxis dataKey="dept" />
              <YAxis dataKey="grants_received" ticks={[0, 100, 200, 300]} />
              <Tooltip cursor={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default ResGrants;

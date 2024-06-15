import React from "react";
import { Chemistry_Details } from "./Dept-Research-file/Chemistry_Details";

const Chemistry_short = () => {
  return (
    <div>
      <div className="flex flex-col justify-center px-20 py-10">
        <div className="px-20 text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Chemistry_Details.description1}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-20 pb-10">
        <div className="px-20 text-lg flex flex-col gap-1.5 text-justify">
          <ol className="flex flex-col gap-1.5 px-10 list-decimal">
            {Chemistry_Details.research.map((ele, index) => {
              return (
                <li>
                  <span className="font-normal">{ele}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="flex flex-col justify-center px-20 pb-10">
        <div className="px-20 text-lg flex flex-col gap-3 text-justify">
          <p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {Chemistry_Details.description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chemistry_short;

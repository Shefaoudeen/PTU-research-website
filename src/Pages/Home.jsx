import React from "react";
import Banner from "../Layout/Banner";

const Home = () => {
  return (
    <>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Puducherry Technological University ,"}
        additional={"Puducherry- 605014"}
      />
      <div className="flex flex-col items-center w-full overflow-hidden">
        <h1 className="w-[80vw] text-2xl sm:text-3xl md:text-4xl px-4 py-8 text-center">
          Warm Welcome to the Directorate of Academic Research
        </h1>
        <div className=" bg-slate-100 flex justify-center flex-col items-center py-6 w-full max-md:px-5 max-md:text-md">
          <div className="flex md:flex-row flex-col items-start justify-between  md:w-[75vw]">
            <h2 className="font-bold text-3xl  min-w-40 p-2 max-md:text-xl">
              VISION:
            </h2>
            <p className="text-xl md:w-[80%] p-4 text-justify">
              To evolve into a university of global eminence through
              transformative learning and research in frontier areas of
              engineering and technology towards developing holistic technology
              leaders, innovators and entrepreneurs.
            </p>
          </div>
          <br></br>
          <div className="flex md:flex-row flex-col items-start justify-between md:w-[75vw]">
            <h2 className="font-bold text-3xl min-w-40 max-md:text-xl">
              MISSION:
            </h2>
            <ul className="flex flex-col text-xl p-4 md:w-[80%] text-justify list-disc gap-4 max-md:text-lg">
              <li>
                To create a conducive environment and learning opportunities to
                shape, nurture and promote the innate scholastic capabilities of
                students and scholars through a socially relevant and
                outward-facing curriculum.
              </li>
              <li>
                To establish Centres of Research (CoRs) in cutting edge
                technology and create an ecosystem for innovation and
                independent thinking in multidisciplinary areas of science,
                engineering and technology.
              </li>
              <li>
                {" "}
                To build synergistic partnerships with technology corporates and
                leading universities around shared agenda towards enabling a
                smooth transition for graduates from university to industry and
                academia.
              </li>
              <li>
                To promote entrepreneurial spirit, sustainable development
                outlook and build strong leadership capabilities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

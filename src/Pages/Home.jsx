import React, { useEffect, useState } from "react";
import Banner from "../Layout/Banner";
import axios from "axios";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  const [allNotice, setAllNotice] = useState([]);

  let elHeight;

  useEffect(() => {
    axios
      .get("https://research-server-k9vc.onrender.com/notice")
      .then((res) => {
        setAllNotice(res.data);
        console.log(allNotice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  /*
  useGSAP(() => {
    elHeight = document.getElementById("updateContainer").clientHeight;
    console.log(elHeight);
    if (elHeight > 398) {
      gsap.to(".updates", {
        translateY: -1 * elHeight + 100,
        duration: 20,
        repeat: -1,
        scrambleText: {
          ScrollTrigger: "#updateContainer",
          start: "0px top",
        },
      });
    }
  }, []);
*/
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
        <div
          id="info"
          className="  flex justify-center flex-col items-center py-6 w-full max-md:px-5 max-md:text-md"
        >
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
        <div className="flex py-10 w-full items-center justify-center">
          <div className="w-[80%]">
            <div className="md:px-10">
              <div className="bg-[#343a40] w-full py-2 max-md:px-10 text-white text-2xl text-center font-bold rounded-t-2xl">
                <h1>Ph.D Notifications</h1>
              </div>

              <div
                className="border border-[#343a40] p-5 flex justify-center items-center flex-col gap-5 h-[400px] overflow-y-auto rounded-b-2xl"
                id="updateContainer"
              >
                {/*{allNotice.map((ele, index) => {
                  return (
                <div key={index} className="updates">
                  <div className="border-b-2 border-[#343a40] pb-2.5">
                    <h1 className="font-bold md:text-2xl pb-1">{ele?.title}</h1>
                    <h1 className="md:text-lg py-3">{ele?.description}</h1>
                    {ele.link === "" ? null : (
                      <a href={ele?.link} target="_blank">
                        <button className="bg-[#fd7e14] px-5 py-2 md:text-lg text-white rounded-lg font-bold pb-3">
                          Know More
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                  );
                })}
                */}
                <div>
                  <h1 className="text-3xl font-bold">No New Updates</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

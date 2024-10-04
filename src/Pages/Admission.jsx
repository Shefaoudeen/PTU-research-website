import React from "react";
import Banner from "../Layout/Banner";
import { admission_details } from "../Data/AdmissionPage";

const Admission = () => {
  return (
    <div className="bg-slate-50">
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Admission"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="flex flex-col justify-center items-center py-10 gap-10">
        <div className="bg-slate-300 p-4 md:px-10 max-md:w-[80%]  rounded-xl md:text-justify flex flex-col gap-5">
          <h1 className="font-bold text-xl">Note: </h1>
          <div className="max-md:text-sm">
            <h1 className="font-bold ">
              For Ph.D regular (FT and PT) and Visvesvaraya Ph.D schemes
            </h1>
            <h1 className="">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; the candidates have to apply
              through same application.
            </h1>
          </div>
          <div className="max-md:text-sm">
            <h1 className="font-bold">
              For AICTE Doctoral Fellowship(ADF) the application is different
            </h1>
            <h1 className="">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GATE Qualification is
              mandatory for ADF. No Entrance for ADF Scheme
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center md:px-20 max-md:px-10  w-screen">
          <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify w-full">
            <h1 className="text-[#1e6c93] md:text-2xl text-xl font-semibold">
              AICTE Doctoral Fellowship (ADF) Scheme
            </h1>
            <p className="text-lg">The objectives of the ADF Scheme are:</p>
            <ul className="flex flex-col list-decimal pl-5 text-justify">
              <li>
                To seed, grow and facilitate research for transforming the
                quality and quantity of research in AICTE-approved institutions/
                affiliated Universities.{" "}
              </li>
              <li>
                {" "}
                To nurture a strong culture of research and knowledge creation
                which is essential for outstanding education and development.
              </li>
              <li>
                To fund and hence promote collaborative and outstanding
                peerreviewed research between technical institutions and
                industries leading to start-ups.
              </li>
              <li>
                To catalyze quality academic research for developing a robust
                ecosystem of research in AICTE-approved institutions.
              </li>
            </ul>
            <div className="flex justify-around gap-5 max-md:text-sm">
              <a
                href="https://drive.google.com/file/d/1g_hPFfQ_XQvCIpS_alCkYXlEnh4tLFd4/view"
                target="_blank"
              >
                <button className="bg-[#1e6c93]/80 hover:bg-[#1e6c93] transition-all duration-200 text-white md:px-8 md:py-4 max-md:p-2 rounded-xl">
                  ADF Scheme Guidelines
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/100m-KcYPwLQY3GGJTidw-ww7ohk31oCp/view"
                target="_blank"
              >
                <button className="bg-[#1e6c93]/80 text-white md:px-8 md:py-4 max-md:p-2 rounded-xl hover:bg-[#1e6c93] transition-all duration-200">
                  Key features of ADF Scheme
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:px-20 max-md:px-10  w-screen">
          <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify w-full">
            <h1 className="text-[#1e6c93] md:text-2xl text-xl font-semibold">
              Visvesvaraya Ph.D scheme for Electronics and IT: Phase -II
            </h1>
            <p className="max-md:text-sm">
              The Ministry of Electronics and IT (MeitY) of the Government of
              India has launched Phase II of the Visvesvaraya PhD Scheme for
              Electronics and IT. This initiative aims to foster research in
              Electronics System Design and Manufacturing (ESDM) and IT and IT
              Enabled sectors. Following the proposal submitted by PTU, the
              institute has been allocated three full-time Ph.D seats (including
              one in the C2S programme) and one part-time seat for the academic
              year 2024-25. For more information, visit the official website:
              <a
                href="https://phd.digitalindiacorporation.in/home"
                target="_blank"
                className="text-indigo-700 font-bold max-md:block"
              >
                https://phd.digitalindiacorporation.in/home
              </a>
            </p>
            <div className="flex flex-col gap-5 py-5 md:px-10">
              <div className="flex flex-col gap-2">
                <div className="font-bold max-md:text-sm">
                  <h1>
                    Electronics and Communication Engineering - 2 seats (FT)
                  </h1>
                  <h1>(includes 1 seat in C2S programme)</h1>
                </div>
                <div>
                  <p>
                    Analog VLSI Design, Embedded System Design, Signal
                    Processing, 5G/6G Wireless Communication, AI/ML for
                    Communication Cryptography and Network Security, Optical
                    communication and Computer Networks
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold max-md:text-sm">
                  <h1>Computer Science and Engineering - 1 seat (FT)</h1>
                </div>
                <div>
                  <p>
                    Artificial Intelligence, Big Data, Cyber Security, Data
                    Mining, Data Warehousing, Distributed Systems and Cloud
                    Computing, Machine Learning, Natural Language Processing,
                    Neuron Networks, Pattern Recognition, Virtual reality
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold max-md:text-sm">
                  <h1>Information Technology - 1 seat (PT)</h1>
                </div>
                <div>
                  <p>
                    Software Engineering, Image processing, Natural Language
                    processing, Real time systems, Information Security,
                    Distributed computing, Mobile Networks, Data Mining, Big
                    Data, Machine Learning and Internet of Things.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Admission to the above mentioned seats under Visveswaraya scheme
              will be filled based on the merits and performance in the written
              exam and interview.
            </p>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-xl">Highlights</h1>
              <p>
                Financial Support for <strong>Full-time PhD candidates</strong>{" "}
                under Visvesvaraya PhD Scheme: Fellowship: Fellowship: Rs.
                38,750 per month in 1st and 2nd year and @Rs. 43,750 per month
                in 3rd, 4th and 5th years of PhD. (support till PhD completion
                or 5 years whichever is earlier). Research Contingency Grant
                Support: An amount of Rs. 1,20,000/Year/Full-time PhD candidate
                for support duration of PhD candidate.
              </p>
              <p>
                The <strong>Part-time PhD candidate</strong> is eligible to
                receive a One-time incentive of Rs. 3.00 Lakhs, through DBT in
                his/her bank account, on successful completion of PhD and
                required formalities with the institution and the scheme; such
                as submission of requisite completion documents, claims, etc.
                through the institution to DIC.{" "}
              </p>
            </div>
            <div className="flex justify-around text-xs gap-5 max-md:grid max-md:grid-rows-3">
              <a
                href="https://drive.google.com/file/d/1PKs2O9g0lZmkCoT6gpC8hm9W-0oVu28M/view"
                target="_blank"
                className="max-md:w-full"
              >
                <button className="bg-[#1e6c93]/80 max-md:w-full hover:bg-[#1e6c93] transition-all duration-200 max-md:text-xs md:px-4 md:py-4 max-md:p-2 text-white  rounded-xl">
                  SoP for Visvesvaraya Ph.D Scheme
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1he0pBrOkugVH1-aQK99tBDoCm-G3m0ss/view"
                target="_blank"
              >
                <button className="bg-[#1e6c93]/80 text-white  rounded-xl hover:bg-[#1e6c93] transition-all duration-200 max-md:text-xs md:px-4 md:py-4 max-md:p-2">
                  Terms and Conditions For Visvesvaraya Ph.D.Scheme
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1ZhYNr7G7WJskRzuX8CEVPMG65-EVvkal/view"
                target="_blank"
                className="h-full"
              >
                <button className="bg-[#1e6c93]/80 h-full max-md:w-full text-white  rounded-xl hover:bg-[#1e6c93] transition-all duration-200 max-md:text-xs md:px-4 md:py-4 max-md:p-2">
                  Visvesvaraya Ph.D scheme
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:px-20 max-md:px-10 pb-10 w-screen">
          <div className="md:px-20 md:text-lg flex flex-col gap-3 text-justify w-full">
            <h1 className="text-[#1e6c93] text-2xl font-semibold">
              Ph .D Full time and Part time Programmes
            </h1>
            <ul className="flex flex-col"></ul>
            <p>
              Applications are invited from eligible candidates from academia
              and industry to pursue Ph.D{" "}
              <strong>(Full time & Part time)</strong> research in{" "}
              <strong>Engineering</strong>
              (ECE,EEE, EIE,ME,CE, Chemical Engg., CSE and IT),{" "}
              <strong>Science</strong>
              (Computer Science, Physics, Mathematics and Humanities & Social
              Sciences (English) disciplines for the academic year 2024-25.
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 space-x-5 max-md:grid-cols-1 max-md:space-y-4">
            {admission_details.map((ele, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={ele.image}
                  className="w-[200px] h-[300px] object-contain"
                />
                <h1 className="font-bold text-center">{ele.title}</h1>
                <a href={ele.Link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 px-10 py-2 text-white rounded-3xl mt-2">
                    Download
                  </button>
                </a>
              </div>
            ))}
          </div>
          <p className="text-justify px-5 w-full pt-5">
            For clarifications regarding full-time, Part-time (Internal) and
            Part-time (External) refer Section 3 and Section 5 of Ph.D
            Regulations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admission;

import React from "react";
import Banner from "../Layout/Banner";

const Supervisors = () => {
  return (
    <div>
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Recognized Supervisors"}
        desc_style={"font-bold text-4xl"}
        additional={""}
      />
      <div className="bg-[#1e6c93] mb-10 text-center">
        <div className="py-8 text-white font-semibold text-3xl text-balance">
          <h1>
            Recognized Supervisors of Puducherry Technological University (PTU)
            and Perunthalaivar Kamarajar Institute of Engineering and Technology
            (PKIET)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Supervisors;

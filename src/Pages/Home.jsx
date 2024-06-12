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
        <h1 className="w-[80vw] text-3xl md:text-4xl px-4 py-8 text-center">
          Warm Welcome to the Directorate of Academic Research
        </h1>
        <div className=" bg-slate-100 flex justify-center flex-col items-center py-6 w-full ">
          <div className="flex md:flex-row flex-col items-center justify-between  md:w-[80vw]">
            <h2 className="font-bold text-3xl  min-w-40 p-2">VISION:</h2>
            <p className="text-xl w-3/4 p-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, ad
              asperiores impedit numquam aperiam quam dignissimos repudiandae,
              at perferendis quas eligendi quibusdam doloremque nisi laudantium
              odio aut, hic laborum nulla.
            </p>
          </div>
          <br></br>
          <div className="flex md:flex-row flex-col items-center justify-between md:w-[80vw]">
            <h2 className="font-bold text-3xl min-w-40">MISSION:</h2>
            <p className="text-xl w-3/4 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est
              expedita quaerat mollitia accusamus eveniet, rerum qui
              exercitationem. Amet at deserunt expedita non optio odit mollitia
              alias animi repudiandae qui.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

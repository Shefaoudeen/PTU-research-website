import React from "react";
import Banner from "../Layout/Banner";

const PageNotFound = () => {
  return (
    <div>
      {" "}
      <Banner
        title={"Directorate of Academic Research"}
        desc={"Puducherry Technological University ,"}
        additional={"Puducherry- 605014"}
      />
      <div className="flex w-full flex-col items-center justify-center py-10 gap-3">
        <h1 className="text-6xl font-bold">404!</h1>
        <h1 className="font-bold">Page Not Found</h1>
      </div>
    </div>
  );
};

export default PageNotFound;

import React from "react";
import { Link } from "react-router-dom";

const HomeCms = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-[100px]">
        <div>
          <Link to="/cms/notice" state={{ isVerified: true }}>
            <div className="bg-slate-200 p-5 rounded-xl">
              <h1>Updates</h1>
            </div>
          </Link>
        </div>

        <div>
          <div className="bg-slate-200 p-5 rounded-xl">
            <h1>Downloads</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCms;

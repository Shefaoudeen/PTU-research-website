import React, { useState } from "react";
import Login from "./Login";
import HomeCms from "./HomeCms";

const Cms = () => {
  const [isLogined, setisLogined] = useState(true);

  return <>{isLogined ? <HomeCms /> : <Login />}</>;
};

export default Cms;

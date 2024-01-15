import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* Here our components change dynamically :  <MainContainer /> or <WatchPage /> with the help of <Outlet/> we provide a childrens into our body */}

      <Outlet />
    </div>
  );
};

export default Body;

import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "../routes";

const Body = () => {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
};

export default Body;

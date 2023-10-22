import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = React.lazy(() => import("./components/Login"));
const Browse = React.lazy(() => import("./components/Browse"));

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "../routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../appStore/userSlice";

const Body = () => {
  const dispatch = useDispatch();


  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
};

export default Body;

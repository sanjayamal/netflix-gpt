import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const validateMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validateMessage);
  };

  return (
    <dispatchEvent>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/1c598436-a03a-49fc-afc5-69e717e55e3d/LK-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black mx-auto left-0 right-0 my-36 text-white bg-opacity-70 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now "
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </dispatchEvent>
  );
};

export default Login;

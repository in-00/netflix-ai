import React , {useState} from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn , setIsSignIn] = useState(true)
  const toggleSignIn = (isSignIn)=>{
    console.log("before " + isSignIn)
    setIsSignIn(!isSignIn);
    console.log("after " + isSignIn);
  }
  return (
    <div>
      <Header />
      <div className="absolute h-[100%]">
        <img
          alt="logo"
          className="object-cover h-[100%]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <form className="absolute p-16 bg-black w-6/12 mx-auto my-36  right-0 left-0 flex flex-col rounded-lg bg-opacity-75">
        <h1 className="mb-7 font-semibold  text-white text-4xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-5 mb-4 rounded-lg bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-5 mb-4 rounded-lg bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-5 mb-4 rounded-lg bg-gray-700"
        />
        <button className="p-4 mt-6 mb-3 bg-red-600 text-white rounded-lg text-xl font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div
          className="mt-4 text-gray-400 text-xl cursor-pointer"
          onClick={toggleSignIn}
        >
          New to Netflix?
          <span className="text-white">
            {!isSignIn ? " Sign In Now" : " Sign Up Now"}
          </span>
        </div>
        <div className="my-4 text-gray-400 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-600"> Learn more.</span>
        </div>
      </form>
    </div>
  );
};

export default Login;

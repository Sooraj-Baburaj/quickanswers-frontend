"use client";
import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useLogin from "./hooks/useLogin";

const Login = () => {
  const { handleGoogleSuccess } = useLogin();
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className="w-full flex flex-col items-center">
        <div className="w-full relative flex flex-col mb-lg">
          <Input
            label={"Email"}
            name={"emil"}
            type={"email"}
            placeholder={"Enter email address"}
          />
        </div>
        <div className="w-full relative flex flex-col mb-lg">
          <Input
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Enter password"}
          />
        </div>
        <div className="w-full relative">
          <Button type="primary-box" title={"Login"} />
        </div>

        <div className="w-auto relative flex flex-col justify-center items-center opacity-[.2] py-lg">
          <span className="w-[100%] h-[1px] absolute bg-[#000]"></span>
          <span className="bg-[#fff] z-[1] mx-[16px] px-[5px]">Or</span>
        </div>

        <div className="w-full">
          {/* <button className="w-full border border-[#EBEAEC] rounded-sm min-h-[40px] px-lg py-sm bg-[#FAFAFB]">
          Login Google
        </button> */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

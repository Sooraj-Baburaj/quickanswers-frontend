import React from "react";

import AuthSwitch from "@/src/components/AuthSwitch";
import Input from "@/src/components/ui/Input";
import Button from "@/src/components/ui/Button/button";

const SignUp = () => {
  return (
    <>
      <div className="w-full mb-xl flex justify-center items-center">
        <AuthSwitch activeTab="signup" />
      </div>
      <div className="w-full relative flex flex-col mb-lg">
        <Input
          label={"Name"}
          name={"text"}
          type={"email"}
          placeholder={"Enter user name"}
        />
      </div>
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
      <div className="w-full relative flex flex-col mb-lg">
        <Input
          label={"Password-re"}
          name={"password"}
          type={"password"}
          placeholder={"Reenter password"}
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
        <button className="w-full border border-[#EBEAEC] rounded-sm min-h-[40px] px-lg py-sm bg-[#FAFAFB]">
          Login Google
        </button>
      </div>
    </>
  );
};

export default SignUp;

"use client";
import React from "react";
import Button from "../../ui/Button";

const AuthSwitch = ({ activeTab = "login", changeView }) => {
  return (
    <div className="w-max bg-[#E6E6E6] rounded-full flex">
      <Button
        href={"/login"}
        className={`whitespace-pre py-md px-xl rounded-full duration-300 transition-all ${
          activeTab === "login" ? "bg-primary text-white" : ""
        }`}
        onClick={() => changeView("login")}
      >
        Login
      </Button>
      <Button
        href={"/signup"}
        className={`whitespace-pre py-md px-xl rounded-full duration-300 transition-all ${
          activeTab === "sign_up" ? "bg-primary text-white" : ""
        }`}
        onClick={() => changeView("sign_up")}
      >
        Sign up
      </Button>
    </div>
  );
};

export default AuthSwitch;

import React from "react";
import Images from "../Images";

const Avatar = ({ invert }) => {
  return (
    <div
      className={`${
        invert ? "text-[#fff]" : "text-[#00]"
      } w-full flex items-center `}
    >
      <div className="w-[40px] rounded-full aspect-square overflow-hidden bg-[#c9c9c9]">
        <Images
          src={"/images/banner-home.jpg"}
          className={"absolute w-full h-full"}
        />
      </div>
      <div className="w-full flex flex-col pl-md">
        <h4 className="text-lg mb-[2px] leading-none">MichaelChourdakis</h4>
        <p className="text-sm opacity-60 leading-none">Software developer</p>
      </div>
    </div>
  );
};

export default Avatar;

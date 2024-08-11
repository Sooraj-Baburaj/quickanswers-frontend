import React from "react";
import Images from "../Images";

const Avatar = ({ invert, title, designation }) => {
  return (
    <div
      className={`${
        invert ? "text-[#fff]" : "text-[#00]"
      } w-full flex items-center `}
    >
      <div className="w-[40px] rounded-full aspect-square overflow-hidden bg-[#e7e7e7] flex justify-center items-center">
        {/* <Images
          src={"/images/banner-home.jpg"}
          className={"absolute w-full h-full"}
        /> */}
        {title && (
          <span className="uppercase text-[14px] leading-none">
            {title.charAt(0)}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col pl-md">
        <h4 className="text-lg mb-[2px] leading-none">{title}</h4>
        <p className="text-sm opacity-60 leading-none">{designation}</p>
      </div>
    </div>
  );
};

export default Avatar;

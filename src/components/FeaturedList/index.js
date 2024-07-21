import React from "react";
import Links from "../Links";

const FeaturedList = () => {
  return (
    <div className="w-full relative after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#fff] after:to-[#E8E4EB] after:absolute after:bottom-[0px] after:right-[0px]">
      <ul className="w-full flex flex-col border-r border-r-[#E8E4EB] pb-md">
        <li className="w-full">
          <Links className="w-full p-lg flex leading-none text-md font-medium bg-[#FAFAFB] border-r-[3px] border-r-primary" href="/">Most Linked Questions</Links>
        </li>
        <li className="w-full">
          <Links className="w-full p-lg flex leading-none text-md font-medium" href="/">Verified By QuickAnswer Team</Links>
        </li>
        <li className="w-full">
          <Links className="w-full p-lg flex leading-none text-md font-medium" href="/">Latest Questions</Links>
        </li>
        <li className="w-full">
          <Links className="w-full p-lg flex leading-none text-md font-medium" href="/">Trending Categories</Links>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedList;

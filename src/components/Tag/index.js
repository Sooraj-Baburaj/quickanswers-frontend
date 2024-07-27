import React from "react";

const Tag = ({ title, size = "sm" }) => {
  const sizes =
    size === "lg"
      ? "px-[16px] py-[8px] text-md"
      : size === "md"
      ? "px-[12px] py-[6px] text-sm"
      : size === "sm"
      ? "px-[10px] py-[4px] text-sm"
      : "";
  return (
    <button
      className={`bg-[#f4ecf9] ${sizes} font-normal rounded-full  leading-none`}
    >
      {title}
    </button>
  );
};

export default Tag;

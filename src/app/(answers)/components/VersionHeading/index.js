import Button from "@/src/components/ui/Button/button";
import React from "react";

const VersionHeading = () => {
  return (
    <div className="w-full flex flex-col pt-[35px] space-y-lg items-start ">
      <button
        className={
          "px-lg w-auto text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]"
        }
      >
        Go Back
      </button>
      <h4 className="font-secondary text-[32px] font-bold leading-normal max-w-[593px] mb-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
        <span>
          <button className="bg-[#E8E4EB] px-[10px] py-[4px] font-normal rounded-full text-sm leading-none">
            Health
          </button>
        </span>
      </h4>
    </div>
  );
};

export default VersionHeading;

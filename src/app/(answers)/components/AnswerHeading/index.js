import ColabAvatars from "@/src/components/ColabAvatars";
import DateAndTime from "@/src/components/DateAndTime";
import VerifiedBy from "@/src/components/VerifiedBy";
import React from "react";

const AnswerHeading = () => {
  return (
    <div className="w-full flex flex-col pt-[35px]">
      <h1 className="font-secondary text-[32px] font-bold leading-normal max-w-[593px] mb-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
      <div className="w-full flex items-center space-x-lg mb-xl">
        <ColabAvatars />
        <span className="text-md">
          <DateAndTime />
        </span>
        <VerifiedBy />
      </div>
    </div>
  );
};

export default AnswerHeading;

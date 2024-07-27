import ColabAvatars from "@/src/components/ColabAvatars";
import DateAndTime from "@/src/components/DateAndTime";
import Tag from "@/src/components/Tag";
import VerifiedBy from "@/src/components/VerifiedBy";
import React from "react";

const AnswerHeading = () => {
  return (
    <div className="w-full flex flex-col pt-[35px]">
      <h1 className="font-secondary text-[32px] font-bold leading-[1.2] max-w-[593px] mb-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
      <div className="w-full relative flex flex-col mt-md mb-xl">
        <ul className="flex flex-wrap w-auto -m-sm">
          <li className="p-sm">
            <Tag title="Technology" size="lg" />
          </li>
          <li className="p-sm">
            <Tag title="Lifestyle" size="lg" />
          </li>
          <li className="p-sm">
            <Tag title="Travel" size="lg" />
          </li>
          <li className="p-sm">
            <Tag title="Food" size="lg" />
          </li>
          <li className="p-sm">
            <Tag title="Health & Wellness" size="lg" />
          </li>
        </ul>
      </div>
      <div className="w-full flex items-center space-x-lg mb-lg">
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

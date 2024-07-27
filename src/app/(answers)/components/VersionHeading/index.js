import Tag from "@/src/components/Tag";
import Button from "@/src/components/ui/Button/button";
import Icon from "@/src/components/ui/Icon";
import Links from "@/src/components/ui/Links";
import React from "react";

const VersionHeading = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col pt-[35px] space-y-lg items-start ">
        <Links
          href="/answers/1"
          className={
            "px-lg w-auto text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]"
          }
        >
          <span className="inline-block rotate-180">
            <Icon icon="arrows" size={10} color="#000" />
          </span>
          <span className="pl-md">Go Back</span>
        </Links>
        <h4 className="font-secondary text-[32px] font-bold leading-[1.2] max-w-[593px] mb-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
        <div className="w-full relative flex flex-col mt-md">
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
      </div>
    </div>
  );
};

export default VersionHeading;

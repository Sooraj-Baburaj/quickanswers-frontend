import React from "react";
import Links from "../ui/Links";
import Icon from "../ui/Icon";

const Pagination = () => {
  return (
    <div className="w-auto flex flex-wrap">
      <Links
        href="/"
        className="w-[34px] h-[34px] rounded-full border border-[#D8D0DD] flex justify-center items-center rotate-180"
      >
        <Icon icon="arrows" size={12} color="#000" />
      </Links>
      <Links
        href="/"
        className="w-[34px] h-[34px] flex justify-center items-center text-md"
      >
        1
      </Links>
      <Links
        href="/"
        className="w-[34px] h-[34px] flex justify-center items-center text-md"
      >
        2
      </Links>
      <Links
        href="/"
        className="w-[34px] h-[34px] flex justify-center items-center text-md"
      >
        3
      </Links>
      <Links
        href="/"
        className="w-[34px] h-[34px] flex justify-center items-center text-md"
      >
        4
      </Links>
      <Links
        href="/"
        className="w-[34px] h-[34px] rounded-full border border-[#D8D0DD] flex justify-center items-center"
      >
        <Icon icon="arrows" size={12} color="#000" />
      </Links>
    </div>
  );
};

export default Pagination;

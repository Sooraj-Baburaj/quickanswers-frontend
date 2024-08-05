import React from "react";

const Categories = () => {
  return (
    <div className="w-full relative">
      <div className="w-full mb-md">
        <h4 className="text-xl font-medium">Categories</h4>
      </div>
      <div className="w-full relative flex flex-col">
        <input
          className="border border-[#E8E4EB] px-lg py-md rounded-[10px]"
          type="text"
          placeholder="Find categories"
        />
      </div>
      <div className="w-full relative flex flex-col pt-lg">
        <ul className="flex flex-wrap w-auto -m-sm">
          <li className="p-sm">
            <span className="relative">
              <input type="text" className="absolute opacity-0" />
              <span className="bg-[#E8E4EB] px-[16px] py-[4px] font-normal rounded-full text-lg flex">
                Health
              </span>
            </span>
          </li>
          <li className="p-sm">
            <span className="relative">
              <input type="text" className="absolute opacity-0" />
              <span className="bg-[#E8E4EB] px-[16px] py-[4px] font-normal rounded-full text-lg flex">
                Beauty
              </span>
            </span>
          </li>
          <li className="p-sm">
            <span className="relative">
              <input type="text" className="absolute opacity-0" />
              <span className="bg-[#E8E4EB] px-[16px] py-[4px] font-normal rounded-full text-lg flex">
                Entertainment
              </span>
            </span>
          </li>
          <li className="p-sm">
            <span className="relative">
              <input type="text" className="absolute opacity-0" />
              <span className="bg-[#E8E4EB] px-[16px] py-[4px] font-normal rounded-full text-lg flex">
                Media
              </span>
            </span>
          </li>
          <li className="p-sm">
            <span className="relative">
              <input type="text" className="absolute opacity-0" />
              <span className="bg-[#E8E4EB] px-[16px] py-[4px] font-normal rounded-full text-lg flex">
                Tech
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;

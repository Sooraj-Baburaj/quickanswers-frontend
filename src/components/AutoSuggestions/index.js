import React from "react";
import AutoSuggestionsItem from "./AutoSuggestionsItem";
import Icon from "../ui/Icon";
import Links from "../ui/Links";

const AutoSuggestions = () => {
  return (
    <>
      <div className="absolute w-full pointer-events-none pt-[28px] z-[8]">
        <div className="w-full bg-[#fff] flex flex-col rounded-b-[10px] pointer-events-auto pt-[40px] pb-[16px] p-[24px]  h-[calc(100vh-300px)] shadow-md">
          <div className="w-full relative flex-1 h-full overflow-hidden overflow-y-auto">
            <ul className="w-full flex flex-col">
              <li className="w-full mb-lg pb-lg border-b border-dashed border-b-[#E8E4EB] last:border-b-0">
                <AutoSuggestionsItem />
              </li>
              <li className="w-full mb-lg pb-lg border-b border-dashed border-b-[#E8E4EB] last:border-b-0">
                <AutoSuggestionsItem />
              </li>
              <li className="w-full mb-lg pb-lg border-b border-dashed border-b-[#E8E4EB] last:border-b-0">
                <AutoSuggestionsItem />
              </li>
              <li className="w-full mb-lg pb-lg border-b border-dashed border-b-[#E8E4EB] last:border-b-0">
                <AutoSuggestionsItem />
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center items-center pt-[12px] border-t border-t-[#E8E4EB]">
            <Links
              className="text-md font-medium flex items-center space-x-md opacity-90 hover:opacity-100 duration-300"
              href="/answers/1"
            >
              <span>View All Result</span>
              <span>
                <Icon icon="arrows" size={10} color="#000" />
              </span>
            </Links>
          </div>
        </div>
      </div>
      <div className="w-full fixed top-[0] left-[0] bg-[#000] h-full bg-opacity-50"></div>
    </>
  );
};

export default AutoSuggestions;

import TextEditor from "@/src/components/TextEditor";
import Spinner from "@/src/components/ui/Spinner";
import React from "react";
import QuestionForm from "./components/Form";

const Ask = () => {
  return (
    <div className="w-full relative pt-[35px] ">
      <div className="container">
        <div className="w-full relative flex flex-col space-y-lg max-w-[800px] mx-auto">
          <div className="w-full relative">
            <button
              className={
                "px-lg w-auto text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]"
              }
            >
              Go Back
            </button>
          </div>

          <QuestionForm />

          <div className="w-full relative">
            <div className="w-full mb-md">
              <h4 className="text-xl font-medium">Categories</h4>
            </div>
            <div className="w-full relative flex flex-col">
              <input
                className="border border-[#E8E4EB] px-lg py-md rounded-[10px]"
                type="text"
                placeholder="Find categories"
                // value={
                //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                // }
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

          <div className="w-full flex justify-end pt-[8px]">
            <button className="bg-primary flex items-center text-white whitespace-pre px-xl py-[12px] leading-[1.4] rounded-full">
              <span className="inline-block mr-[10px]">Generate Answer</span>
              <span className="w-[20px] h-[20px] relative flex justify-center items-center">
                {/* gemini icon */}
                <span className="icon-gemini"></span>

                {/* spinner */}
                <Spinner />
              </span>
            </button>
          </div>

          <div className="w-full relative">
            <div className="w-full mb-md">
              <h4 className="text-xl font-medium">Answer</h4>
            </div>
            <div className="w-full relative flex flex-col">
              <TextEditor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;

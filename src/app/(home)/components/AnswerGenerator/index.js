import AutoSuggestions from "@/src/components/AutoSuggestions";
import Input from "@/src/components/ui/Input";
import Spinner from "@/src/components/ui/Spinner";
import React from "react";

const AnswerGenerator = () => {
  return (
    <div className="w-full mt-[-24px] relative z-10">
      <div className="container">
        <div className="w-full relative flex">
          <form className="w-full shadow-md rounded-full flex overflow-hidden bg-[#fff] p-sm z-[9]">
            <span className="w-full flex">
              <Input
                className={
                  "w-full flex-1 px-lg py-md focus-visible:outline-none"
                }
                type={"text"}
                placeholder={"Ask your question here..."}
              />
            </span>
            <span className="w-auto flex">
              <button className="bg-primary flex items-center text-white whitespace-pre px-xl py-md leading-[1.4] rounded-full">
                <span className="inline-block mr-[10px]">Generate Answer</span>
                <span className="w-[20px] h-[20px] relative flex justify-center items-center">
                  {/* gemini icon */}
                  <span className="icon-gemini"></span>

                  {/* spinner */}
                  <Spinner />
                </span>
              </button>
            </span>
          </form>
          <AutoSuggestions />
        </div>
      </div>
    </div>
  );
};

export default AnswerGenerator;

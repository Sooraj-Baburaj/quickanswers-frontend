"use client";
import React from "react";
import TextEditor from "@/src/components/TextEditor";
import TurndownService from "turndown";

const QuestionForm = () => {
  const turndownService = new TurndownService();
  return (
    <>
      <div className="w-full relative">
        <div className="w-full mb-md">
          <h4 className="text-xl font-medium">Ask your question</h4>
        </div>
        <div className="w-full relative flex flex-col">
          <input
            className="border border-[#E8E4EB] px-lg py-md rounded-[10px]"
            type="text"
            placeholder="Enter your question"
            // value={
            //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            // }
          />
        </div>
      </div>

      <div className="w-full relative">
        <div className="w-full mb-md">
          <h4 className="text-xl font-medium">Description</h4>
        </div>
        <div className="w-full relative flex flex-col">
          <TextEditor
            onChange={(e) =>
              console.log(JSON.stringify(turndownService.turndown(e)), "desc")
            }
          />
        </div>
      </div>
    </>
  );
};

export default QuestionForm;

"use client";
import React from "react";
import TextEditor from "@/src/components/TextEditor";
import useAnswerGenerateAndEdit from "./useAnswerGenerateAndEdit";

const AnswerGenerateAndEdit = () => {
  const { sanitizedHtml } = useAnswerGenerateAndEdit();
  return (
    <div className="w-full relative">
      <div className="w-full mb-md">
        <h4 className="text-xl font-medium">Answer</h4>
      </div>
      <div className="w-full relative flex flex-col">
        <TextEditor value={sanitizedHtml} />
      </div>
    </div>
  );
};

export default AnswerGenerateAndEdit;

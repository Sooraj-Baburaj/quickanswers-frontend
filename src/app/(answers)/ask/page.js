import React from "react";

import TextEditor from "@/src/components/TextEditor";
import QuestionForm from "./components/QuestionForm";
import GoBackButton from "@/src/components/GoBackButton";

const Ask = async () => {
  return (
    <div className="w-full relative pt-[35px] ">
      <div className="container">
        <div className="w-full relative flex flex-col space-y-lg max-w-[800px] mx-auto">
          <GoBackButton />

          <QuestionForm />

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

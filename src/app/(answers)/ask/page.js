import React from "react";

import QuestionForm from "./components/QuestionForm";
import GoBackButton from "@/src/components/GoBackButton";
import AnswerGenerateAndEdit from "./components/AnswerGenerateAndEdit";

const Ask = async () => {
  return (
    <div className="w-full relative pt-[35px] ">
      <div className="container">
        <div className="w-full relative flex flex-col space-y-lg max-w-[800px] mx-auto">
          <GoBackButton />

          <QuestionForm />

          <AnswerGenerateAndEdit />
        </div>
      </div>
    </div>
  );
};

export default Ask;

import React from "react";
import AnswerDetails from "../../components/AnswerDetails";
import RelatedAnswers from "../../components/RelatedAnswers";
import { getAnswer } from "./apis";

const AnswerDetail = async ({ params }) => {
  const answer = await getAnswer(params.slug);
  console.log(answer, "ans", params.slug);
  return (
    <>
      <AnswerDetails data={answer} />
      <RelatedAnswers />
    </>
  );
};

export default AnswerDetail;

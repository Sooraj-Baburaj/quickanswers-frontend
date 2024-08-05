import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { marked } from "marked";
import DOMPurify from "dompurify";

import AnswerState from "@/src/recoil/answerAtom";

const useAnswerGenerateAndEdit = () => {
  const answerState = useRecoilValue(AnswerState);
  console.log(answerState, "ans");

  const sanitizedHtml = useMemo(() => {
    const rawMarkup = marked(answerState.answer);
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
    return sanitizedMarkup;
  }, [answerState.answer]);

  return { sanitizedHtml };
};

export default useAnswerGenerateAndEdit;

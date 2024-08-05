import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { marked } from "marked";
import DOMPurify from "dompurify";

import AnswerState from "@/src/recoil/answerAtom";

const useAnswerGenerateAndEdit = () => {
  const [answerState, setAnswerState] = useRecoilState(AnswerState);

  const sanitizedHtml = () => {
    try {
      const rawMarkup = marked(answerState.generatedAnswer);
      const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
      return sanitizedMarkup;
    } catch (error) {
      return "";
    }
  };

  useEffect(() => {
    if (answerState.isGenerating) {
      setAnswerState((state) => ({
        ...state,
        editedAnswer: sanitizedHtml(answerState.generatedAnswer),
      }));
    }
  }, [answerState.generatedAnswer]);

  const handleChange = (e) => {
    setAnswerState((state) => ({ ...state, editedAnswer: e }));
  };

  return { answer: answerState.editedAnswer, handleChange };
};

export default useAnswerGenerateAndEdit;

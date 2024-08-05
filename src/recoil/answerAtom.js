import { atom } from "recoil";

const AnswerState = atom({
  key: "AnswerState",
  default: {
    generatedAnswer: "",
    isGenerating: false,
    editedAnswer: "",
  },
});

export default AnswerState;

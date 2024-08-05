import { atom } from "recoil";

const AnswerState = atom({
  key: "AnswerState",
  default: {
    answer: "",
  },
});

export default AnswerState;

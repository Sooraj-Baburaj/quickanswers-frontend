import { atom } from "recoil";

const answerState = atom({
  key: "answerState",
  default: {
    answer: "",
  },
});

export default answerState;

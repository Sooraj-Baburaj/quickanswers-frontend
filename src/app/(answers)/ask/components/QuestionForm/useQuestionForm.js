import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { useRecoilState } from "recoil";

import { createQuestion } from "@/src/app/(home)/components/BannerSearch/apis";
import { getAnswerStream } from "./api";
import AnswerState from "@/src/recoil/answerAtom";

const useQuestionForm = () => {
  const searchParams = useSearchParams();

  const [answerState, setAnswerState] = useRecoilState(AnswerState);

  const [showDescription, setShowDescription] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      question: searchParams.get("question") ?? "",
      description: "",
    },
    onSubmit: (values, { setErrors }) => {
      setLoading(true);
      createQuestion(values).then(async (r) => {
        setLoading(false);
        if (r?.status === 200) {
          setAnswerState((state) => ({ ...state, isGenerating: true }));
          await getAnswerStream(r?.data?.data?._id, (chunk) =>
            setAnswerState((state) => ({
              ...state,
              generatedAnswer: state.generatedAnswer + chunk,
            }))
          );
          setAnswerState((state) => ({ ...state, isGenerating: false }));
        } else if (r?.status === 409) {
          setErrors({
            question: (
              <p>
                The question already exists,{" "}
                <Link
                  href={`/answers/${r?.data?.data?._id}`}
                  className="text-primary"
                >
                  Click here to see
                </Link>
              </p>
            ),
          });
        }
      });
    },
  });

  const handleShowDescription = () => {
    setShowDescription(true);
  };
  return {
    formik,
    showDescription,
    loading: loading || answerState.isGenerating,
    handleShowDescription,
  };
};

export default useQuestionForm;

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { useRecoilState, useSetRecoilState } from "recoil";

import { createQuestion } from "@/src/app/(home)/components/BannerSearch/apis";
import { getAnswerStream } from "./api";
import AnswerState from "@/src/recoil/answerAtom";

const useQuestionForm = () => {
  const searchParams = useSearchParams();

  const setAnswerState = useSetRecoilState(AnswerState);

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
        console.log(r, "res q");
        setLoading(false);
        if (r?.status === 200) {
          setLoading(true);
          await getAnswerStream(r?.data?.data?._id, (chunk) =>
            setAnswerState((state) => ({ answer: state.answer + chunk }))
          );
          setLoading(false);
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
  return { formik, showDescription, loading, handleShowDescription };
};

export default useQuestionForm;

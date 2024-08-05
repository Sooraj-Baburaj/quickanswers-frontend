import { useFormik } from "formik";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const useQuestionForm = () => {
  const searchParams = useSearchParams();
  const [showDescription, setShowDescription] = useState(false);

  const formik = useFormik({
    initialValues: {
      question: searchParams.get("question") ?? "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values, "val");
    },
  });

  const handleShowDescription = () => {
    setShowDescription(true);
  };
  return { formik, showDescription, handleShowDescription };
};

export default useQuestionForm;

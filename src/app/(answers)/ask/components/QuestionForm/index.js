"use client";
import React from "react";
import TextEditor from "@/src/components/TextEditor";
import Input from "@/src/components/ui/Input";
import useQuestionForm from "./useQuestionForm";
import GenerateButton from "@/src/app/(home)/components/BannerSearch/GenerateButton";

const QuestionForm = () => {
  const { formik, showDescription, loading, handleShowDescription } =
    useQuestionForm();

  return (
    <>
      <div className="w-full relative">
        <div className="w-full mb-md">
          <h4 className="text-xl font-medium">Ask your question</h4>
        </div>
        <Input
          classNames="py-md"
          placeholder="Enter your question"
          value={formik.values.question}
          {...formik.getFieldProps("question")}
          error={formik.touched.question && formik.errors.question}
          subText={
            !showDescription && (
              <p className="text-sm">
                If you want to elaborate the question,{" "}
                <span
                  className="text-primary cursor-pointer opacity-70 font-semibold hover:opacity-100 duration-200"
                  onClick={handleShowDescription}
                >
                  Add Description.
                </span>
              </p>
            )
          }
        />
      </div>

      {showDescription && (
        <div className="w-full relative">
          <div className="w-full mb-md">
            <h4 className="text-xl font-medium">Description</h4>
          </div>
          <div className="w-full relative flex flex-col">
            <TextEditor
              placeholder="Enter details here"
              value={formik.values.description}
              onChange={(e) => {
                formik.setFieldValue("description", e);
              }}
            />
          </div>
        </div>
      )}
      {/* <Categories /> */}
      <div className="w-full flex justify-end pt-[8px]">
        <GenerateButton loading={loading} handleClick={formik.handleSubmit} />
      </div>
    </>
  );
};

export default QuestionForm;

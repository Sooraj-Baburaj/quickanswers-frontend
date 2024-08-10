"use client";
import React, { useEffect } from "react";
import AnswerHeading from "../AnswerHeading";
import GeneratedText from "../GeneratedText";
import AnswerAction from "../AnswerAction";
import VersionsThumbnails from "../VersionsThumbnails";
import Comments from "../Comments";

const AnswerDetails = ({ data }) => {
  return (
    <div className="w-8/12 pr-[40px]">
      <AnswerHeading data={data} />
      <GeneratedText answer={data?.data?.answer?.answer ?? ""} />
      <AnswerAction />
      <VersionsThumbnails />
      <Comments />
    </div>
  );
};

export default AnswerDetails;

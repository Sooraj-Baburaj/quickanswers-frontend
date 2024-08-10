import React, { useMemo } from "react";
import ColabAvatars from "@/src/components/ColabAvatars";
import DateAndTime from "@/src/components/DateAndTime";
import Tag from "@/src/components/Tag";
import VerifiedBy from "@/src/components/VerifiedBy";
import { format } from "date-fns";

const AnswerHeading = ({ data }) => {
  const askedAt = useMemo(() => {
    return data?.data?.question?.createdAt
      ? {
          date: format(data?.data?.question?.createdAt, "d LLLL yyyy"),
          time: format(data?.data?.question?.createdAt, "hh:mma"),
        }
      : {};
  }, []);
  return (
    <div className="w-full flex flex-col pt-[35px]">
      <h1 className="font-secondary text-[32px] font-bold leading-[1.2] max-w-[593px] mb-lg">
        {data?.data?.question?.question ?? ""}
      </h1>
      <div className="w-full relative flex flex-col mt-md mb-xl">
        <ul className="flex flex-wrap w-auto -m-sm">
          <li className="p-sm">
            <Tag title="Science" size="lg" />
          </li>
          <li className="p-sm">
            <Tag title="Physics" size="lg" />
          </li>
        </ul>
      </div>
      <div className="w-full flex items-center space-x-lg mb-lg">
        {/* <ColabAvatars /> */}
        <span className="text-md">
          <DateAndTime date={askedAt.date} time={askedAt.time} />
        </span>
        <VerifiedBy />
      </div>
    </div>
  );
};

export default AnswerHeading;

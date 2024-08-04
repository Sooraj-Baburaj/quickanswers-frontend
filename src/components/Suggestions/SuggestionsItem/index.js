import React, { useMemo } from "react";
import Tag from "../../Tag";
import Icon from "../../ui/Icon";
import Link from "next/link";
import { format } from "date-fns";

const SuggestionsItem = ({ item }) => {
  const formattedDateTime = useMemo(() => {
    const date = new Date(item?.document?.createdAt);

    return { time: format(date, "h:mm a"), date: format(date, "d MMM yyy") };
  }, []);
  return (
    <Link
      href={`/answers/${item?.document?.id}`}
      className="w-full flex flex-wrap group hover:text-primary duration-300"
    >
      <div className="w-full flex flex-col flex-1">
        <div className="w-full flex-col mb-xs">
          <div className="w-full flex items-center text-[#787878] text-sm space-x-md">
            <span>{formattedDateTime.date}</span>
            <span>{formattedDateTime.time}</span>
            <span className="w-[20px] rounded-full h-[20px] flex justify-center items-center">
              <Icon icon="tick-mark" size={20} color="#000" />
            </span>
          </div>
        </div>
        <h4 className="text-lg leading-[1.6] font-medium mb-sm">
          {item?.document?.question ?? ""}
        </h4>
        <p className="text-md opacity-70">{item?.document?.answer ?? ""}</p>
        {/* <div className="w-full relative flex flex-col mt-md mb-sm">
          <ul className="flex flex-wrap w-auto -m-sm">
            <li className="p-sm">
              <Tag title="Technology" size="md" />
            </li>
            <li className="p-sm">
              <Tag title="Lifestyle" size="md" />
            </li>
            <li className="p-sm">
              <Tag title="Travel" size="md" />
            </li>
            <li className="p-sm">
              <Tag title="Food" size="md" />
            </li>
            <li className="p-sm">
              <Tag title="Health & Wellness" size="md" />
            </li>
          </ul>
        </div> */}
        <div className="text-md space-x-md mt-md opacity-65 group-hover:opacity-100 duration-300">
          <span>Read Answer</span>
          <span>
            <Icon icon="arrows" size={10} color="#000" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionsItem;

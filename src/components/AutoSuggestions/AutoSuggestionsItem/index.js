import React from "react";
import Tag from "../../Tag";
import Icon from "../../ui/Icon";
import Links from "../../ui/Links";

const AutoSuggestionsItem = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full flex flex-col flex-1">
        <div className="w-full flex-col mb-xs">
          <div className="w-full flex items-center text-[#787878] text-sm space-x-md">
            <span>20 June 2024</span>
            <span>10:00PM</span>
            <span className="w-[20px] rounded-full h-[20px] flex justify-center items-center">
              <Icon icon="tick-mark" size={20} color="#000" />
            </span>
          </div>
        </div>
        <h4 className="text-lg leading-[1.6] font-medium mb-sm">
          Inverse formula of exponential moving average (ewm) in pandas{" "}
        </h4>
        <p className="text-md opacity-70">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, facilis
          dolorum. Qui, molestias. Autem quidem temporibus, perspiciatis rem
          aspernatur obcaecati ex quod iste itaque explicabo reprehenderit,
          nulla quis est. Inventore?
        </p>
        <div className="w-full relative flex flex-col mt-md mb-sm">
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
        </div>
        <Links
          className="text-md space-x-md mt-md opacity-65 hover:opacity-100 duration-300"
          href="/answers/1"
        >
          <span>Read Answer</span>
          <span>
            <Icon icon="arrows" size={10} color="#000" />
          </span>
        </Links>
      </div>
    </div>
  );
};

export default AutoSuggestionsItem;

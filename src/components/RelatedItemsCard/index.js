import React from "react";
import Links from "../ui/Links";
import Icon from "../ui/Icon";
import Tag from "../Tag";

const RelatedItemsCard = () => {
  return (
    <div className="w-full flex flex-col border-primary-border border p-lg rounded-lg">
      <div className="w-full flex flex-col">
        <div className="w-full flex-col mb-xs">
          <div className="w-full flex items-center text-[#787878] text-sm space-x-md">
            <span>20 June 2024</span>
            <span>10:00PM</span>
            <span className="w-[20px] rounded-full h-[20px] flex justify-center items-center">
              <Icon icon="tick-mark" size={20} color="#000" />
            </span>
          </div>
        </div>
        <h4 className="text-xl leading-[1.3] font-medium mb-sm">
          Inverse formula of exponential moving average (ewm) in pandas{" "}
        </h4>
        <p className="text-md opacity-60">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, facilis
          dolorum. Qui, molestias. Autem quidem temporibus, perspiciatis rem
          aspernatur obcaecati ex quod iste itaque explicabo reprehenderit,
          nulla quis est. Inventore?
        </p>

        <div className="w-full fled items-start mt-md">
          <ul className="w-full flex space-x-md [&>*]:mb-md flex-wrap">
            <li>
              <div className="px-md w-full text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
                <span className="w-[20px] h-[20px] flex justify-center items-center mr-sm">
                  <Icon icon="tick" size={14} color="#000" />
                </span>
                <span>
                  <span className="font-medium">20</span> found this helpful
                </span>
              </div>
            </li>
            <li>
              <div className="px-md w-full text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
                <span className="w-[20px] h-[20px] flex justify-center items-center mr-sm">
                  <Icon icon="comment" size={12} color="#000" />
                </span>
                <span>53</span>
              </div>
            </li>
            <li>
              <Tag title="Technology" size="lg" />
            </li>
          </ul>
        </div>
        <Links
          className="text-md space-x-md mt-sm opacity-65 hover:opacity-100 duration-300"
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

export default RelatedItemsCard;

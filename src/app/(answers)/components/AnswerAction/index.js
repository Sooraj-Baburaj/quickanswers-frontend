import Button from "@/src/components/ui/Button";
import Icon from "@/src/components/ui/Icon";
import Links from "@/src/components/ui/Links";
import VoteBtn from "@/src/components/ui/VoteBtn";
import React from "react";

const AnswerAction = () => {
  return (
    <div className="w-full flex justify-between pt-xl">
      <div className="w-auto relative">
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
        </ul>
      </div>
      <div className="w-auto space-x-md">
        <Links href="/answers/1/version" type="primary">
          View Answer history
        </Links>
        <Button icon={<Icon icon="like" size={20} color="#fff" />}>
          Edit Answer
        </Button>
      </div>
    </div>
  );
};

export default AnswerAction;

import React from "react";
import Icon from "../Icon";
import Tag from "../Tag";
import Links from "../Links";

const QuestionThumbnail = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-max fled flex-col items-start">
        <ul className="w-full flex flex-col space-y-md">
          <li>
            <div className="px-md w-full text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
              <span className="w-[20px] h-[20px] flex justify-center items-center mr-sm"><Icon icon="like" size={18} color="#000" /></span>
              <span>53</span>
            </div>
          </li>
          <li>
            <div className="px-md w-full text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
              <span className="w-[20px] h-[20px] flex justify-center items-center mr-sm"><Icon icon="comment" size={12} color="#000" /></span>
              <span>53</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col flex-1 pl-2xl">
        <div className="w-full flex-col mb-xs">
            <div className="w-full flex items-center text-[#787878] text-sm space-x-md">
                <span>20 June 2024</span>
                <span>10:00PM</span>
                <span className="w-[20px] rounded-full h-[20px] flex justify-center items-center">
                <Icon icon="tick-mark" size={20} color="#000" />
                </span>
            </div>
        </div>
        <h4 className="text-lg leading-[1.6] font-medium mb-sm">Inverse formula of exponential moving average (ewm) in pandas <span><Tag/></span></h4>
        <p className="text-md opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, facilis dolorum. Qui, molestias. Autem quidem temporibus, perspiciatis rem aspernatur obcaecati ex quod iste itaque explicabo reprehenderit, nulla quis est. Inventore?</p>
        <Links className="text-md space-x-md mt-md opacity-65 hover:opacity-100 duration-300" href="/">
            <span>Read Answer</span>
            <span><Icon icon="arrows" size={10} color="#000" /></span>
        </Links>
      </div>
      
    </div>
  );
};

export default QuestionThumbnail;

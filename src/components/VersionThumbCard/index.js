import React from "react";
import ColabAvatars from "../ColabAvatars";
import DateAndTime from "../DateAndTime";
import VoteBtn from "../ui/VoteBtn";
import Icon from "../ui/Icon";

const VersionThumbCard = () => {
  return (
    <div className="w-full flex items-start">
      <ColabAvatars single sm />
      <div className="w-full relative flex-1 px-md text-md flex flex-col items-start">
        <div className="w-full flex mb-xs space-x-lg">
          <h4 className="font-medium">Contrary to popular</h4>
          <span className="text-[10px]">
            <DateAndTime time={null} />
          </span>
        </div>
        <p className="mb-md w-full max-w-[300px]">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure..
        </p>
        <div className="w-auto">
          <div className="px-md w-full text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]">
            <span className="w-[20px] h-[20px] flex justify-center items-center mr-sm">
              <Icon icon="tick" size={14} color="#000" />
            </span>
            <span>
              <span className="font-medium">20</span> found this helpful
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionThumbCard;

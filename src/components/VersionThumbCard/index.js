import React from "react";
import ColabAvatars from "../ColabAvatars";
import DateAndTime from "../DateAndTime";
import VoteBtn from "../ui/VoteBtn";

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
        <p className="mb-md">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure..
        </p>
        <div className="w-auto">
          <VoteBtn />
        </div>
      </div>
    </div>
  );
};

export default VersionThumbCard;

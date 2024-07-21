import React from "react";
import DateAndTime from "../DateAndTime";
import { Verified } from "@mui/icons-material";
import VerifiedBy from "../VerifiedBy";
import Links from "../ui/Links";
import VoteBtn from "../ui/VoteBtn";

const RelatedItemsCard = () => {
  return (
    <div className="w-full flex flex-col bg-[#FAFAFB] p-lg rounded-lg">
      <h4 className="text-xl font-secondary font-bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h4>
      <span className="w-full relative flex text-[12px] mt-sm items-center space-x-md">
        <DateAndTime />
        <VerifiedBy iconOnly />
      </span>
      <p className="text-sm mt-sm">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock,...{" "}
      </p>

      <div className="w-full flex justify-between mt-lg">
        <span className="w-auto">
          <VoteBtn />
        </span>
        <Links href="/" className="text-md font-medium">
          Edit Answer
        </Links>
      </div>
    </div>
  );
};

export default RelatedItemsCard;

import Button from "@/src/components/ui/Button";
import Icon from "@/src/components/ui/Icon";
import Links from "@/src/components/ui/Links";
import VoteBtn from "@/src/components/ui/VoteBtn";
import React from "react";

const AnswerAction = () => {
  return (
    <div className="w-full flex justify-between pt-xl">
      <div className="w-auto relative">
        <VoteBtn />
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

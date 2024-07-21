import Button from "@/src/components/ui/Button";
import Icon from "@/src/components/ui/Icon";
import VoteBtn from "@/src/components/ui/VoteBtn";
import React from "react";

const AnswerAction = () => {
  return (
    <div className="w-full flex justify-between pt-xl">
      <div className="w-auto relative">
        <VoteBtn />
      </div>
      <div className="w-auto space-x-md">
        <Button icon={<Icon icon="like" size={20} color="#fff" />}>
          View Answer history
        </Button>
        <Button icon={<Icon icon="like" size={20} color="#fff" />}>
          Edit Answer
        </Button>
      </div>
    </div>
  );
};

export default AnswerAction;

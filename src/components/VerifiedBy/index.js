import React from "react";
import Icon from "../ui/Icon";

const VerifiedBy = ({ iconOnly }) => {
  return (
    <div className="w-auto relative space-x-md flex items-center">
      {!iconOnly && <span className="font-bold">Verified by QuickAnswer</span>}
      <span>
        <Icon icon="tick-mark" size={20} color="#000" />
      </span>
    </div>
  );
};

export default VerifiedBy;

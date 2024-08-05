import React from "react";
import Spinner from "@/src/components/ui/Spinner";

const GenerateButton = ({
  label = "Find Answer",
  loading = false,
  handleClick = () => {},
}) => {
  return (
    <span className="w-auto flex">
      <button
        className="bg-primary flex items-center text-white whitespace-pre px-xl py-md leading-[1.4] rounded-full"
        onClick={handleClick}
        disabled={loading}
      >
        <span className="inline-block mr-[10px]">{label}</span>
        <span className="w-[20px] h-[20px] relative flex justify-center items-center">
          <span className="icon-gemini" />
          {loading && <Spinner />}
        </span>
      </button>
    </span>
  );
};

export default GenerateButton;

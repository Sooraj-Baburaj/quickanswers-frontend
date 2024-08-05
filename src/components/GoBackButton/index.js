"use client";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <div className="w-full relative">
      <button
        className={
          "px-lg w-auto text-md h-[32px] min-w-[53px] flex justify-center items-center rounded-full border border-[#E8E4EB]"
        }
        onClick={router.back}
      >
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;

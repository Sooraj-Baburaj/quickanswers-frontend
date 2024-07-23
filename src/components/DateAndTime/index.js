import React from "react";

const DateAndTime = ({ date = '20 June 2024', time = '10:00PM' }) => {
  return (
    <div className="w-auto flex text-[#787878] space-x-md items-center">
      {date && <span>20 June 2024</span>}
      {
        time &&
        <>
          <small className="w-[3px] h-[3px] rounded-full bg-[#787878]"></small>
          <span>10:00PM</span>
        </>
      }

    </div>
  );
};

export default DateAndTime;

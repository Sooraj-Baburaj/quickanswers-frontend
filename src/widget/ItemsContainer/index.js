import React from "react";
import SideBar from "../SideBar";
import QuestionsList from "../QuestionsList";

const ItemsContainer = () => {
  return (
    <div className="w-full flex flex-wrap relative pt-[52px]">
      <div className="container">
        <div className="w-full flex flex-wrap">
          <diva className="w-full max-w-[314px]">
            <SideBar />
          </diva>
          <div className="w-full relative flex flex-1">
            <div className="w-full relative flex flex-col px-[20px]">
              <QuestionsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;

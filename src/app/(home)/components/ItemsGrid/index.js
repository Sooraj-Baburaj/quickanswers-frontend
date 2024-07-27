import CategoryTab from "@/src/components/CategoryTab";
import QuestionThumbnail from "@/src/components/QuestionThumbnail";
import Button from "@/src/components/ui/Button";
import Icon from "@/src/components/ui/Icon";
import React from "react";

const ItemsGrid = () => {
  return (
    <div className="w-full relative pb-[48px]">
      <div className="container">
        <div className="w-full relative flex mb-xl justify-between items-center">
          <h4 className="w-full text-xl font-semibold">Top question Answers</h4>
          <div className="w-auto">
            <CategoryTab />
          </div>
        </div>
        <div className="w-full flex flex-col relative">
          <div className="w-auto flex flex-wrap -m-[5px]">
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-2xl ">
          <Button type="secondary" onClick={() => toggleModal("sign_up")}>
            <span>View All Question & Answers</span>
            <span className="pl-md">
              <Icon icon="arrows" size={12} color="currentColor" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemsGrid;

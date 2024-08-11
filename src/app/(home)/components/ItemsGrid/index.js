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
                <QuestionThumbnail
                  title={`What is overfitting in machine learning, and how can it be prevented?`}
                  description={`Overfitting occurs when a machine learning model performs well on training data but poorly on unseen data, due to learning noise and details`}
                  commentsCount={10}
                  foundHelpful={2}
                />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail
                  title={`What are the key themes in George Orwell's novel 1984?`}
                  description={`984 explores themes such as totalitarianism, surveillance, censorship, and the manipulation of truth. The novel critiques how oppressive governments can control `}
                  commentsCount={2}
                  foundHelpful={3}
                />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail
                  title={`What was the significance of the Magna Carta?`}
                  description={`The Magna Carta, signed in 1215, is significant because it limited the power of the English monarch and established the principle that everyone, including the king`}
                  commentsCount={4}
                  foundHelpful={1}
                />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail
                  title={`What is overfitting in machine learning, and how can it be prevented?`}
                  description={`Overfitting occurs when a machine learning model performs well on training data but poorly on unseen data, due to learning noise and details`}
                  commentsCount={10}
                  foundHelpful={2}
                />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail
                  title={`What are the key themes in George Orwell's novel 1984?`}
                  description={`984 explores themes such as totalitarianism, surveillance, censorship, and the manipulation of truth. The novel critiques how oppressive governments can control `}
                  commentsCount={2}
                  foundHelpful={3}
                />
              </div>
            </div>
            <div className="w-1/3 p-[5px]">
              <div className="w-full bg-[#F1FBF9] p-xl rounded-md overflow-hidden border-y border-y-primary-border">
                <QuestionThumbnail
                  title={`What was the significance of the Magna Carta?`}
                  description={`The Magna Carta, signed in 1215, is significant because it limited the power of the English monarch and established the principle that everyone, including the king`}
                  commentsCount={4}
                  foundHelpful={1}
                />
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

import RelatedItemsCard from "@/src/components/RelatedItemsCard";
import React from "react";

const RelatedAnswers = () => {
  return (
    <div className="w-4/12 pt-[35px] space-y-lg">
      <RelatedItemsCard
        title={`What is overfitting in machine learning, and how can it be prevented?`}
        description={`Overfitting occurs when a machine learning model performs well on training data but poorly on unseen data, due to learning noise and details`}
        commentsCount={10}
        foundHelpful={2}
      />
      <RelatedItemsCard
        title={`What are the key themes in George Orwell's novel 1984?`}
        description={`984 explores themes such as totalitarianism, surveillance, censorship, and the manipulation of truth. The novel critiques how oppressive governments can control `}
        commentsCount={2}
        foundHelpful={3}
      />
      <RelatedItemsCard
        title={`What was the significance of the Magna Carta?`}
        description={`The Magna Carta, signed in 1215, is significant because it limited the power of the English monarch and established the principle that everyone, including the king`}
        commentsCount={4}
        foundHelpful={1}
      />
    </div>
  );
};

export default RelatedAnswers;

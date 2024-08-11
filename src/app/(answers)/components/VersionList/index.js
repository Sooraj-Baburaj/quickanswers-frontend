import React from "react";
import VersionListItem from "./versionListItem";

const VersionList = () => {
  return (
    <div className="w-full flex flex-col mt-2xl">
      <h4 className="w-full text-xl font-semibold mb-xl">Previous Versions </h4>
      <div className="w-full flex flex-col">
        <div className="w-full relative pb-[40px] pl-[40px] group">
          <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[50px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-30px] border-l-[3px] h-[calc(100%-25px)] rounded-tl-[15px]  border-l-pribg-primary-border border-t-[3px] border-t-pribg-primary-border flex top-[12px] left-[0] group-first:after:hidden"></span>
          <VersionListItem
            description={`Instagram's algorithm prioritizes posts in a user's feed based on their engagement patterns. It tracks how users interact with content—likes, comments, shares, and saves—and shows more of what they engage with. The algorithm also considers how recently a post was shared, with newer posts being prioritized, so users are likely to see the latest content from accounts they frequently interact with.`}
          />
        </div>
        <div className="w-full relative pb-[40px] pl-[40px] group">
          <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[40px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-30px] border-l-[3px] h-[calc(100%-25px)] rounded-tl-[15px]  border-l-pribg-primary-border border-t-[3px] border-t-pribg-primary-border flex top-[12px] left-[0] group-first:after:hidden"></span>
          <VersionListItem
            description={`Instagram's algorithm uses machine learning to predict what content users will find interesting. It analyzes past behavior, such as who users follow, the types of posts they interact with, and even the time spent viewing different types of content. The algorithm then ranks posts in the feed based on predicted interest, relevance to the user, and the relationship with the content creator, giving higher visibility to posts that are likely to resonate with the user.

`}
          />
        </div>
        <div className="w-full relative pb-[40px] pl-[40px] group">
          <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[50px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-30px] border-l-[3px] h-[calc(100%-25px)] rounded-tl-[15px]  border-l-pribg-primary-border border-t-[3px] border-t-pribg-primary-border flex top-[12px] left-[0] group-first:after:hidden"></span>
          <VersionListItem
            description={`The Instagram algorithm takes into account the strength of relationships between users. It looks at direct interactions, like messaging, tagging in posts, and mutual engagements, to determine how close two users are. Content from accounts that users interact with more frequently is given higher priority. Additionally, the algorithm monitors overall user activity, such as the time spent on the app and the diversity of content interacted with, to tailor the feed accordingly.`}
          />
        </div>
        <div className="w-full relative pb-[40px] pl-[40px] group">
          <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[40px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-30px] border-l-[3px] h-[calc(100%-25px)] rounded-tl-[15px]  border-l-pribg-primary-border border-t-[3px] border-t-pribg-primary-border flex top-[12px] left-[0] group-first:after:hidden"></span>
          <VersionListItem
            description={`Instagram's algorithm also considers the type of content a user prefers, such as photos, videos, carousels, or Stories. It monitors which formats a user engages with most frequently and prioritizes similar content in their feed. For example, if a user often interacts with videos, the algorithm will show more video content. It also takes into account the user's response to new features, such as Reels, and may promote those formats to users who are likely to engage with them.`}
          />
        </div>
      </div>
    </div>
  );
};

export default VersionList;

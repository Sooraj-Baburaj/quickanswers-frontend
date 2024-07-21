import VersionThumbCard from "@/src/components/VersionThumbCard";
import React from "react";

const VersionsThumbnails = () => {
  return (
    <div className="w-full flex flex-col mt-xl space-y-lg">
      <h4 className="text-xl font-medium">Previous Versions </h4>

      <div className="w-full flex space-x-md">
        <div className="w-auto">
          <VersionThumbCard />
        </div>
        <div className="w-auto">
          <VersionThumbCard />
        </div>
        <div className="w-auto">
          <VersionThumbCard />
        </div>
      </div>
    </div>
  );
};

export default VersionsThumbnails;

import React from "react";
import VersionListItem from "./versionListItem";

const VersionList = () => {
  return (
    <div className="w-full flex flex-col mt-2xl">
      <h4 className="w-full text-xl font-semibold mb-xl">Previous Versions </h4>
      <div className="w-full flex flex-col">
        <div className="w-full relative pb-[40px] pl-[40px] group">
          <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[50px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-30px] border-l-[3px] h-[calc(100%-25px)] rounded-tl-[15px]  border-l-pribg-primary-border border-t-[3px] border-t-pribg-primary-border flex top-[12px] left-[0] group-first:after:hidden"></span>
          <VersionListItem />
        </div>
        <div className="w-full relative pb-[40px] pl-[40px] group">
          <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[40px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-30px] border-l-[3px] h-[calc(100%-25px)] rounded-tl-[15px]  border-l-pribg-primary-border border-t-[3px] border-t-pribg-primary-border flex top-[12px] left-[0] group-first:after:hidden"></span>
          <VersionListItem />
        </div>
        <div className="w-full relative pb-[40px] pl-[40px] group">
          <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[50px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-30px] border-l-[3px] h-[calc(100%-25px)] rounded-tl-[15px]  border-l-pribg-primary-border border-t-[3px] border-t-pribg-primary-border flex top-[12px] left-[0] group-first:after:hidden"></span>
          <VersionListItem />
        </div>
        <div className="w-full relative pb-[40px] pl-[40px] group">
          <span className="w-[20px] translate-x-[10px] mb-[24px] absolute after:w-[3px] after:h-[40px] after:bg-primary-border after:left-[-3px] after:absolute after:top-[-30px] border-l-[3px] h-[calc(100%-25px)] rounded-tl-[15px]  border-l-pribg-primary-border border-t-[3px] border-t-pribg-primary-border flex top-[12px] left-[0] group-first:after:hidden"></span>
          <VersionListItem />
        </div>
      </div>
    </div>
  );
};

export default VersionList;

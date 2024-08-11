"use client";
import Suggestions from "@/src/components/Suggestions";
import Input from "@/src/components/ui/Input";
import Spinner from "@/src/components/ui/Spinner";
import React from "react";
import useBannerSearch from "./useBannerSearch";
import GenerateButton from "./GenerateButton";

const BannerSearch = () => {
  const {
    loading,
    searchValue,
    searchResults,
    handleChange,
    handleFindAnswer,
  } = useBannerSearch();
  return (
    <div className="w-full mt-[-24px] relative z-10">
      <div className="container">
        <div className="w-full relative flex max-w-[800px] mx-auto">
          <div className="w-full shadow-md rounded-full flex overflow-hidden bg-[#fff] p-sm z-[9]">
            <span className="w-full flex">
              <Input
                value={searchValue}
                onChange={handleChange}
                className={
                  "w-full flex-1 px-lg py-md focus-visible:outline-none border-[#cacaca] bg-[#FAFAFB]"
                }
                type={"text"}
                placeholder={"Ask your question here..."}
              />
            </span>
            <GenerateButton loading={loading} handleClick={handleFindAnswer} />
          </div>
          {searchResults.length > 0 && (
            <Suggestions results={searchResults} searchValue={searchValue} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerSearch;

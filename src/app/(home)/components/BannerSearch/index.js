"use client";
import Suggestions from "@/src/components/Suggestions";
import Input from "@/src/components/ui/Input";
import Spinner from "@/src/components/ui/Spinner";
import React from "react";
import useBannerSearch from "./useBannerSearch";

const BannerSearch = () => {
  const {
    loading,
    searchValue,
    searchResults,
    handleChange,
    handleCreateQuestion,
  } = useBannerSearch();
  return (
    <div className="w-full mt-[-24px] relative z-10">
      <div className="container">
        <div className="w-full relative flex max-w-[800px] mx-auto">
          <form className="w-full shadow-md rounded-full flex overflow-hidden bg-[#fff] p-sm z-[9]">
            <span className="w-full flex">
              <Input
                value={searchValue}
                onChange={handleChange}
                className={
                  "w-full flex-1 px-lg py-md focus-visible:outline-none"
                }
                type={"text"}
                placeholder={"Ask your question here..."}
              />
            </span>
            <span className="w-auto flex">
              <button
                className="bg-primary flex items-center text-white whitespace-pre px-xl py-md leading-[1.4] rounded-full"
                onClick={handleCreateQuestion}
                disabled={loading}
              >
                <span className="inline-block mr-[10px]">Find Answer</span>
                <span className="w-[20px] h-[20px] relative flex justify-center items-center">
                  <span className="icon-gemini"></span>
                  {loading && <Spinner />}
                </span>
              </button>
            </span>
          </form>
          {searchResults.length && (
            <Suggestions results={searchResults} searchValue={searchValue} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerSearch;

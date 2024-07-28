import Images from "@/src/components/ui/Images";
import React from "react";

const HomeBanner = () => {
  return (
    <section className="w-full relative bg-primary">
      <Images
        src={"/images/banner-main.jpg"}
        className={"h-[200px] opacity-[.3]"}
      />
      <div className={"absolute top-[0px] left-[0px] w-full h-full z-10"}>
        <div className="container h-full">
          <diva className="w-full h-full flex justify-center items-end pb-[70px]">
            <h1 className="text-white text-[32px] text-center w-full max-w-[315px]">
              Generate AI-Powered Answers on Demand
            </h1>
          </diva>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

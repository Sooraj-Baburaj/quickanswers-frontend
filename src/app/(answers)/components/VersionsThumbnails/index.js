"use client";
import Slider from "@/src/components/Slider";
import VersionThumbCard from "@/src/components/VersionThumbCard";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Lines from "./Lines";

const VersionsThumbnails = () => {
  return (
    <div className="w-full flex flex-col mt-xl space-y-lg mb-2xl">
      <h4 className="w-full text-xl font-semibold">All Answers</h4>

      <div className="w-full flex space-x-md">
        <Slider slidesPerView={"auto"}>
          <SwiperSlide className="!w-auto pt-[5px] pr-[30px] last:pr-[0px]">
            <Lines />
            <VersionThumbCard
              name={"Daniel"}
              description={`Instagram's algorithm prioritizes posts in a user's feed based on their engagement patterns. It tracks how users interact with content—likes,`}
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto pt-[5px] pr-[30px] last:pr-[0px]">
            <Lines />
            <VersionThumbCard
              name={"Kiran"}
              description={`nstagram's algorithm uses machine learning to predict what content users will find interesting. It analyzes past behavior, such as who users follow,`}
            />
          </SwiperSlide>
          <SwiperSlide className="!w-auto pt-[5px] pr-[30px] last:pr-[0px]">
            <Lines />
            <VersionThumbCard
              name={`albert`}
              description={`The Instagram algorithm takes into account the strength of relationships between users. It looks at direct interactions`}
            />
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
};

export default VersionsThumbnails;

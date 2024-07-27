"use client";
import Slider from "@/src/components/Slider";
import VersionThumbCard from "@/src/components/VersionThumbCard";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Lines from "./Lines";

const VersionsThumbnails = () => {
  return (
    <div className="w-full flex flex-col mt-xl space-y-lg mb-2xl">
      <h4 className="w-full text-xl font-semibold">Previous Versions </h4>

      <div className="w-full flex space-x-md">
        <Slider slidesPerView={"auto"}>
          <SwiperSlide className="!w-auto pt-[5px] pr-[30px] last:pr-[0px]">
            <Lines />
            <VersionThumbCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto pt-[5px] pr-[30px] last:pr-[0px]">
            <Lines />
            <VersionThumbCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto pt-[5px] pr-[30px] last:pr-[0px]">
            <Lines />
            <VersionThumbCard />
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
};

export default VersionsThumbnails;

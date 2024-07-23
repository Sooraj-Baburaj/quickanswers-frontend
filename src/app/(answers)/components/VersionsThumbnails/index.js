"use client";
import Slider from "@/src/components/Slider";
import VersionThumbCard from "@/src/components/VersionThumbCard";
import React from "react";
import { SwiperSlide } from "swiper/react";

const VersionsThumbnails = () => {
  return (
    <div className="w-full flex flex-col mt-xl space-y-lg">
      <h4 className="text-xl font-medium">Previous Versions </h4>

      <div className="w-full flex space-x-md">
        <Slider slidesPerView={"auto"}>
          <SwiperSlide className="!w-auto pt-[30px] pr-[30px] last:pr-[0px]">
            <span className="w-full translate-x-[10px] mb-[24px] relative after:w-[50px] after:h-[3px] after:bg-[#D8D0DD] after:right-[-50px] after:absolute after:top-[-3px] border-l-[3px] h-[30px] rounded-tl-[20px]  border-l-[#D8D0DD] border-t-[3px] border-t-[#D8D0DD] flex"></span>
            <VersionThumbCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto pt-[30px] pr-[30px] last:pr-[0px]">
            <span className="w-full translate-x-[10px] mb-[24px] relative after:w-[50px] after:h-[3px] after:bg-[#D8D0DD] after:right-[-50px] after:absolute after:top-[-3px] border-l-[3px] h-[30px] rounded-tl-[20px]  border-l-[#D8D0DD] border-t-[3px] border-t-[#D8D0DD] flex"></span>
            <VersionThumbCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto pt-[30px] pr-[30px] last:pr-[0px]">
            <span className="w-full translate-x-[10px] mb-[24px] relative after:w-[50px] after:h-[3px] after:bg-[#D8D0DD] after:right-[-50px] after:absolute after:top-[-3px] border-l-[3px] h-[30px] rounded-tl-[20px]  border-l-[#D8D0DD] border-t-[3px] border-t-[#D8D0DD] flex"></span>
            <VersionThumbCard />
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
};

export default VersionsThumbnails;

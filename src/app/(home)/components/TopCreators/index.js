import Slider from "@/src/components/Slider";
import Avatar from "@/src/components/ui/Avatar";
import Links from "@/src/components/ui/Links";
import React from "react";
import { SwiperSlide } from "swiper/react";

const TopCreators = () => {
  return (
    <div className="w-full relative pt-[30px] mb-[48px] overflow-hidden">
      <div className="container">
        <div className="w-full relative flex mb-[16px]">
          <h4 className="w-full text-xl font-semibold">Top Creators</h4>
          <div className="w-auto"></div>
        </div>
        <div className="w-full ">
          <Slider className="!overflow-visible" slidesPerView={"auto"}>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
            <SwiperSlide className="!w-auto pr-[10px] last:pr-[0px]">
              <Links
                href={"/"}
                className={
                  "flex p-[16px] border border-primary-border rounded-md hover:border-primary transition-all duration-300 hover:-translate-y-xs"
                }
              >
                <Avatar />
              </Links>
            </SwiperSlide>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopCreators;

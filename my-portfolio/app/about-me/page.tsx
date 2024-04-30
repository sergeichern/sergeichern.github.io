"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[40px]">
           My Skills{" "}
                <span className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {" "}
               &
               {" "}
              
            </span>
            Experience</h1>
            <p className="text-gray-200 text-[20px]">
            I'm a recently graduated bachelor of Computer Science with in-depth knowledge of tools for developing web and desktop applications,
            including React, Typescript, JS, C-based languages, and many others. I have used them in many awesome projects, which you can check out 
            in the next tab!
          </p>
          <h2 className="font-semibold text-white text-[25px]">
            Tools I'm 
            <span className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> {" "}best {" "}</span> with:
            </h2>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
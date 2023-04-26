import React from "react";
import { RiMotorbikeFill } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsAward, BsEmojiSmile } from "react-icons/bs";

const Statistics = () => {
  return (
    <section className="container mx-auto flex justify-center pb-10  bg-black lg:bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4  bg-black text-white gap-6 p-6 ">
        <div className="flex flex-col justify-center items-center lg:px-6 gap-y-1">
          <RiMotorbikeFill className="text-6xl text-[#EBA83A]" />
          <h1 className="text-3xl lg:text-4xl font-extrabold">
            1200 <span className="text-[#EBA83A]">+</span>
          </h1>
          <h2 className="text-base lg:text-xl font-semibold">Bike Sold</h2>
        </div>

        <div className="flex flex-col justify-center items-center lg:px-6 gap-y-1">
          <HiOutlineUserGroup className="text-6xl text-[#EBA83A]" />
          <h1 className="text-3xl lg:text-4xl font-extrabold">
            200 <span className="text-[#EBA83A]">+</span>
          </h1>
          <h2 className="text-base lg:text-xl font-semibold">Loyal Customer</h2>
        </div>

        <div className="flex flex-col justify-center items-center lg:px-6 gap-y-1">
          <BsAward className="text-6xl text-[#EBA83A]" />
          <h1 className="text-3xl lg:text-4xl font-extrabold">
            99 <span className="text-[#EBA83A]">%</span>
          </h1>
          <h2 className="text-base lg:text-xl font-semibold">Best Service</h2>
        </div>

        <div className="flex flex-col justify-center items-center lg:px-6 gap-y-1">
          <BsEmojiSmile className="text-6xl text-[#EBA83A]" />
          <h1 className="text-3xl lg:text-4xlfont-extrabold">
            500 <span className="text-[#EBA83A]">+</span>
          </h1>
          <h2 className="text-base lg:text-xl  font-semibold">
            Happy Customer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

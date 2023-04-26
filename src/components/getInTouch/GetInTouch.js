import React from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <article className="flex flex-col gap-y-2">
      <h1 className="text-3xl font-[900] text-[#EBA83A]">Contact Us</h1>
      <h2 className="text-5xl font-[900] uppercase">Get in touch</h2>

      <div className="grid grid-cols-2  gap-2">
        <div className="p-6 border shadow-md cursor-pointer duration-500 bg-[#EBA83A] text-white hover:bg-white hover:text-black">
          <div className="text-2xl font-[900] flex items-center gap-3 pb-2">
            <TfiMapAlt /> Location
          </div>
          <p className="text-xs md:text-sm lg:text-base break-words">
            Jl. Raya Ubud No. 88, Bali 80571
          </p>
        </div>

        <div className="p-6 border shadow-md  cursor-pointer duration-500 hover:bg-[#EBA83A] hover:text-white">
          <div className="text-2xl font-[900] flex items-center gap-3 pb-2">
            <AiOutlineClockCircle /> Opening
          </div>
          <p className="text-xs md:text-sm lg:text-base break-words">
            Mon - Sat 08:00 am - 20:00 pm
          </p>
        </div>

        <div className="p-6 border shadow-md  cursor-pointer duration-500 hover:bg-[#EBA83A] hover:text-white">
          <div className="text-2xl font-[900] flex items-center gap-3 pb-2">
            <AiOutlineMail /> Email
          </div>
          <p className="text-xs md:text-sm lg:text-base break-words">
            mushfiqueyeasir@gmail.com
          </p>
        </div>

        <div className="p-6 border shadow-md  cursor-pointer duration-500 hover:bg-[#EBA83A] hover:text-white">
          <div className="text-2xl font-[900] flex items-center gap-3 pb-2">
            <BsFillTelephoneFill /> Phone
          </div>
          <p className="text-xs md:text-sm lg:text-base break-words">
            +880 1624801466
          </p>
        </div>
      </div>
    </article>
  );
};

export default GetInTouch;

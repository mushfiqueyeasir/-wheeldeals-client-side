import React from "react";
import "./Slogan.css";
import { RiUserSettingsLine, RiMotorbikeFill } from "react-icons/ri";
import { BsAward } from "react-icons/bs";

const Slogan = () => {
  return (
    <section className="sloganBackgroundImage py-14 px-2">
      <div className="container mx-auto lg:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-10 bg-white cursor-pointer sloganCard duration-500">
          <div className="flex justify-center items-center gap-x-2 font-extrabold text-3xl pb-3">
            <RiUserSettingsLine className="text-[#EBA83A] text-4xl logo duration-500" />
            Pro Team
          </div>
          <p>
            Our pro team is made up of the best in the business. With years of
            experience and a deep passion for motorcycles, they bring a level of
            expertise to every project that is unparalleled in the industry.
            Meet our pro team and learn more about their qualifications and
            experience.
          </p>
        </div>
        <div className="p-10 bg-white cursor-pointer sloganCardReverse duration-500 mt-2 lg:mt-0">
          <div className="flex justify-center items-center gap-x-2 font-extrabold text-3xl pb-3">
            <RiMotorbikeFill className=" text-4xl logo duration-500" /> Best
            Design
          </div>
          <p>
            Our design team has won numerous awards for their work in creating
            some of the most unique and eye-catching custom motorcycles around.
            From classic choppers to modern sports bikes, our award-winning
            designs are a testament to our commitment to quality and attention
            to detail.
          </p>
        </div>

        <div className="p-10 bg-white cursor-pointer sloganCard duration-500 ">
          <div className="flex justify-center items-center gap-x-2 font-extrabold text-3xl pb-3">
            <BsAward className="text-[#EBA83A] text-4xl logo duration-500" />{" "}
            Best Awards
          </div>
          <p>
            WheelsDeals has been recognized as the best custom motorcycle garage
            in the business by industry experts and satisfied customers alike.
            With a commitment to quality, attention to detail, and a team of
            experts that are second to none, we are proud to be the best in the
            business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slogan;

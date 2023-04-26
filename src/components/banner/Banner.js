import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flex items-center h-[100vh] mt-[-4.2rem] bannerBackgroundImage">
      <div className="container mx-auto px-4 lg:px-10 relative">
        <div className="w-[100%] lg:w-[37%]">
          <h3 className="text-[1.8rem] lg:text-[2.5rem] font-[900] text-[#EBA830]  ">
            We Are WheelDeals
          </h3>
          <h1 className="text-[3rem] lg:text-[6rem] leading-none font-[900] text-white">
            ALWAYS BE ORIGINAL
          </h1>
          <p className="text-white  text-sm lg:text-base">
            At WheelDeals, we specialize in building unique and branded
            motorcycles that stand out from the crowd. Our team of experienced
            professionals work tirelessly to give you any after selling service
            or customization the bike of your dreams. Contact us today to get
            started.
          </p>
          <div className="flex items-center pt-4">
            <Link
              to="/product"
              className="border-2 border-white px-6 py-3 uppercase text-white hover:border-[#EBA830] hover:bg-[#EBA830] duration-300"
            >
              lets start
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

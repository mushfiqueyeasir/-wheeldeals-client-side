import React from "react";
import "./CustomBanner.css";

const CustomBanner = ({ title }) => {
  return (
    <section className="flex items-center min-h-[50vh] mt-[-4.2rem] customBannerBackgroundImage">
      <div className="container mx-auto px-4 lg:px-10 relative">
        <h1 className="text-[3rem] lg:text-[3.5rem] leading-none font-[900] text-white text-center">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CustomBanner;

import React from "react";
import aboutImage from "../../assets/about.png";

const About = () => {
  return (
    <section className="container mx-auto py-10 px-2">
      <div className="lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center items-center ">
        <div>
          <img src={aboutImage} alt="aboutImage" />
        </div>
        <div className="flex  flex-col gap-y-2">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-[#EBA83A]">
            About Us
          </h1>
          <h1 className="text-4xl lg:text-5xl font-extrabold ">
            WE OVER 20 YEARS EXPERIENCE
          </h1>
          <p>
            At WheelDeals, Along with selling branded bikes, we offer a wide
            range of services to help you create your dream ride. From custom
            paint jobs to engine upgrades and performance tuning, we've got you
            covered. Our team of experts will work with you to create a custom
            plan that fits your needs and budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

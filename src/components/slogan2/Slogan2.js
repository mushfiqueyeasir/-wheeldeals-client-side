import React from "react";
import { Link } from "react-router-dom";
const Slogan2 = () => {
  return (
    <section className="sloganBackgroundImage py-14 px-2">
      <div className="container mx-auto lg:w-[60%] ">
        <div className="p-10  cursor-pointer relative duration-500 text-white">
          <h1 className="font-extrabold text-4xl lg:text-6xl  text-center ">
            GRAB YOUR EXTRAORDINARY MOTORCYCLE
          </h1>
          <h1 className="font-extrabold text-4xl lg:text-6xl  text-center text-[#EBA83A] pt-2">
            ORDER NOW!
          </h1>
          <div className="flex justify-center items-center pt-4">
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

export default Slogan2;

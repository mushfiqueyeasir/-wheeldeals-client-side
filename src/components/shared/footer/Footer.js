/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/logeoWhite.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <section className="footer container mx-auto p-10 text-base-content text-white">
        <div>
          <img src={logo} className="w-[100px]" alt="" />
          <p>
            WheelDeals Ltd.
            <br />
            Providing reliable service since 2022
          </p>
        </div>
        <div>
          <span className="font-bold text-xl text-[#EBA83A]">Brands</span>
          <a
            target="__blank"
            href="https://www.suzuki.com.bd/"
            className="link link-hover"
          >
            Suzuki
          </a>
          <a
            target="__blank"
            href="https://www.lifanmotos.net/"
            className="link link-hover"
          >
            Lifan
          </a>
          <a
            target="__blank"
            href="https://zontesbangladesh.com/"
            className="link link-hover"
          >
            Zontes
          </a>
        </div>
        <div>
          <span className="font-bold text-xl text-[#EBA83A]">Company</span>
          <NavLink to="/home" className="link link-hover">
            Home
          </NavLink>
          <NavLink to="/product" className="link link-hover">
            Product
          </NavLink>
          <NavLink to="/contact" className="link link-hover">
            Contact
          </NavLink>
        </div>
        <div>
          <span className="font-bold text-xl text-[#EBA83A]">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </section>
      <hr />
      <section className="footer footer-center p-4 bg-[#070707d8] text-white ">
        <div>
          <p>
            Copyright © 2023 - All right reserved by{" "}
            <a
              target="__blank"
              href="https://mushfique-yeasir.netlify.app/"
              className="text-[#EBA83A] font-semibold"
            >
              Mushfique Yeasir
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

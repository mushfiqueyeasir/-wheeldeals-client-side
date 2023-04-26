import React from "react";
import logo from "../../../assets/logeoWhite.png";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <section className="footer container mx-auto p-10 text-base-content text-white">
        <div>
          <img src={logo} className="w-[100px]" alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="font-bold text-xl text-[#EBA83A]">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="font-bold text-xl text-[#EBA83A]">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
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
            <span className="text-[#EBA83A] font-semibold">
              Mushfique Yeasir
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

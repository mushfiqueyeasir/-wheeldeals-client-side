import React from "react";
import CustomBanner from "../../components/customBanner/CustomBanner";
import ContactForm from "../../components/contactForm/ContactForm";
import GetInTouch from "../../components/getInTouch/GetInTouch";

const ContactUsPage = () => {
  return (
    <section>
      <CustomBanner title="Contact" />
      <div className="lg:w-[65%] mx-auto px-4  pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
          <ContactForm />
          <GetInTouch />
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;

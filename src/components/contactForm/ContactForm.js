import React from "react";

const ContactForm = () => {
  return (
    <form className="transform translate-y-[-5rem] bg-white">
      <div className="p-10 shadow border flex flex-col gap-y-5">
        <h1 className="text-3xl font-extrabold">Leave A Message</h1>

        <div className="flex justify-between items-center gap-2 ">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs rounded-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs rounded-none"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full rounded-none"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full rounded-none"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered w-full  rounded-none"
            placeholder="Message"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="border-2 max-w-[10rem]  border-[#EBA830] px-3 py-2 uppercase text-[#EBA830] hover:text-white hover:bg-[#EBA830]  duration-300"
        >
          send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

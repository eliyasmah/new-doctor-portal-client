import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="text-center py-14"
    >
      <div>
        <h1 className="text-secondary font-bold text-xl">Contact Us</h1>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 justify-items-center p-8">
        <input
          type="email"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          name=""
          id=""
          rows="6"
          placeholder="Your Message"
          className="textarea w-full max-w-md"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default ContactUs;

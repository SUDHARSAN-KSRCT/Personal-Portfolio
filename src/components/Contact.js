import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";
import StarryBackground from "./StarryBackground"; // Importing the animation

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9inzcz7",
        "template_lg8ahdf",
        formRef.current,
        "_8hE7B_7PzOSTxPxm"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Unable to send message!");
        }
      );
  };

  return (
    <section className="relative text-white py-5 px-3 bg-[#674EA7] overflow-hidden">
      {/* Starry Background */}
      <StarryBackground />

      <div className="relative z-10 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
          🔗 Bridging Ideas — Let’s Chat
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-lg font-medium leading-relaxed text-[#E0B0FF]"
          >
            Let's keep in touch
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-[#512D80] p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              className="hidden md:block text-2xl lg:text-3xl text-[#E0B0FF] font-medium mb-3 lg:mb-4"
            >
              Get In Touch
            </h1>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              className="flex gap-5 mb-4 justify-center md:mb-5"
            >
              <SocialHandles />
            </div>
            <div className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaPhoneAlt className="text-[#E0B0FF]" />
              <p className="text-white md:text-lg">{ContactData.phone}</p>
            </div>
            <div className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaEnvelope className="text-[#E0B0FF]" />
              <a href={`mailto:${ContactData.email}`} className="text-white md:text-lg">
                {ContactData.email}
              </a>
            </div>
            <div className="flex gap-3 items-center md:gap-2 lg:gap-5">
              <FaMapMarkerAlt className="text-[#E0B0FF]" />
              <p className="leading-normal text-start text-white md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>
          <form
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex bg-[#674EA7] flex-col p-4 rounded-lg md:w-1/2 lg:px-5 lg:py-7 lg:m-4 lg:w-3/5 shadow-lg"
          >
            <div className="p-2 w-full">
              <input
                required
                placeholder="Name"
                type="text"
                name="user_name"
                className="w-full bg-white text-black rounded-md border border-[#E0B0FF] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-2 leading-8 outline-none transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <input
                required
                placeholder="Email"
                type="email"
                name="user_email"
                className="w-full bg-white text-black rounded-md border border-[#E0B0FF] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-2 leading-8 outline-none transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                required
                placeholder="Message"
                name="message"
                className="w-full bg-white text-black rounded-md border border-[#E0B0FF] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 p-2 resize-none outline-none transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button className="font-medium mx-auto my-3 text-white bg-[#E0B0FF] border-0 py-2 px-12 focus:outline-none hover:scale-110 hover:bg-[#DDA0DD] transition duration-500 rounded-xl text-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

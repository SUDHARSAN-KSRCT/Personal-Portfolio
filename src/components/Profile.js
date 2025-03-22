import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";
import StarryBackground from "./StarryBackground"; // Import the animation

const Profile = () => {
  return (
    <section
      id="home"
      className="relative text-gray-600 bg-[#674EA7] body-font pt-16 lg:min-h-75vh overflow-hidden"
    >
      {/* Add Starry Background */}
      <StarryBackground />

      <div className="relative z-10 p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        
        {/* Profile Image */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 relative"
        >
          <img
            className="object-cover object-center bg-[#B48BFA] border-2 border-[#E0B0FF] pointer-events-none rounded-full shadow-lg transition-transform duration-500 transform hover:scale-110 hover:rotate-6 animate-floating"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
          <div className="absolute inset-0 rounded-full border-4 border-[#E0B0FF] opacity-50 animate-ping"></div>
        </div>

        {/* Text Content */}
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          <SocialHandles />

          {/* Greeting */}
          <h2
            data-aos="fade-down"
            data-aos-duration="1500"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white animate-fadeIn"
          >
            Hello, I am{" "}
            <span className="text-[#E0B0FF]">{ProfileData.name}</span>
          </h2>

          {/* Typewriter Effect */}
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="text-3xl text-white mb-4 font-medium animate-pulse min-h-[40px]"
          >
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>

          {/* Profile Information */}
          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="fade-right"
              data-aos-duration="2000"
              className="mb-2 text-white text-lg md:text-xl leading-relaxed animate-fadeIn"
            >
              {item}
            </p>
          ))}

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-4 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
          >
            {/* Hire Me Button */}
            <button className="inline-flex font-medium text-white bg-[#8A5FD0] border-2 border-[#E0B0FF] py-3 px-7 focus:outline-none hover:bg-[#B48BFA] hover:border-[#8A5FD0] hover:text-black rounded-full text-md xl:px-10 transition-transform transform hover:scale-110">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={750}>
                Hire Me
              </Link>
            </button>

            {/* Resume Button */}
            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
              <button className="inline-flex font-medium text-white bg-[#E0B0FF] border-2 border-[#E0B0FF] py-3 px-7 focus:outline-none hover:bg-[#8A5FD0] hover:border-[#E0B0FF] hover:text-white rounded-full text-md xl:px-10 transition-transform transform hover:scale-110">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      <Wave />
    </section>
  );
};

export default Profile;

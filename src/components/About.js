import React from "react";
import { Link } from "react-scroll";
import AboutData from "../data/about";
import ProfileData from "../data/profile";
import StarryBackground from "./StarryBackground"; // Import Star Animation

const About = () => {
  return (
    <section className="relative text-white bg-[#674EA7] body-font pt-10 lg:pt-16 overflow-hidden">
      {/* Starry Background */}
      <StarryBackground />

      <div className="relative z-10 p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        {/* Section Title */}
        <div id="about" className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
          🎯 Mission: Code Possible — About Me 🚀
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-lg mx-auto leading-relaxed font-medium text-[#E0B0FF] text-center"
          >
            Why hire me?
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          {/* GIF Section - Updated from static image to GIF */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center pointer-events-none rounded shadow-lg border-2 border-[#E0B0FF]"
              alt="hero"
              src={AboutData.gif || AboutData.image} // Using gif if available, otherwise falling back to image
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-center">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="font-medium text-white text-lg lg:text-base xl:text-xl leading-loose xl:leading-8 mb-4"
              >
                {item}
              </p>
            ))}

            {/* Buttons */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center"
            >
              {/* Hire Me Button */}
              <button className="inline-flex font-medium text-white bg-[#8A5FD0] border-2 border-[#E0B0FF] py-3 px-7 focus:outline-none hover:bg-[#B48BFA] hover:border-[#8A5FD0] hover:text-black rounded-full text-md xl:px-10 transition-transform transform hover:scale-110">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
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
      </div>
    </section>
  );
};

export default About;
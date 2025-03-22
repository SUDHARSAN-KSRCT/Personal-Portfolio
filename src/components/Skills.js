import React from "react";
import SkillsData from "../data/skills";
import StarryBackground from "./StarryBackground"; // Import Star Animation

const Skills = () => {
  return (
    <section className="relative text-white bg-[#674EA7] body-font pt-10 lg:pt-16 overflow-hidden">
      {/* Starry Background */}
      <StarryBackground />
      <div id="skills" className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7">
        <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-white">⚡ Mastering the Code: My Skillset & Tech Arsenal 🚀</h1>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-lg font-medium leading-relaxed text-[#E0B0FF]"
        >
          My Technical Expertise
        </p>
      </div>
      <div className="relative z-10 p-4 pt-0 mt-5 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56 border-2 border-[#E0B0FF] rounded-lg shadow-lg hover:shadow-[#E0B0FF]/50 transition-all duration-500">
        {/* Skills Grid */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="px-2 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center"
        >
          {SkillsData.map((skill, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              key={index}
              className="flex flex-col items-center justify-center gap-2 transform transition-transform hover:scale-110 ease-in-out duration-500 group hover:rotate-0 hover:skew-y-0 hover:drop-shadow-[0_0_15px_#E0B0FF] hover:translate-y-[-5px] hover:brightness-110 hover:saturate-150"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="object-cover w-16 h-16 md:w-20 md:h-20 transition-transform group-hover:scale-110 group-hover:rotate-[5deg] group-hover:translate-y-[-3px] group-hover:drop-shadow-[0_0_20px_#fff]"
              />
              <p className="text-base font-medium text-[#E0B0FF] opacity-80 hover:opacity-100 transition-opacity duration-500 group-hover:translate-y-[-3px] group-hover:text-white group-hover:font-bold group-hover:tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

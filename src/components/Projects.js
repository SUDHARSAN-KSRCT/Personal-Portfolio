import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

import ProjectsData from "../data/projects";
import StarryBackground from "./StarryBackground";

const Projects = () => {
  const [currentImages, setCurrentImages] = useState(
    ProjectsData.map(() => 0)
  );

  useEffect(() => {
    const intervals = ProjectsData.map((_, index) =>
      setInterval(() => {
        setCurrentImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = (newImages[index] + 1) % ProjectsData[index].image.length;
          return newImages;
        });
      }, 3000)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative text-white bg-[#674EA7] body-font pt-10 lg:pt-16 overflow-hidden">
      {/* Starry Background */}
      <StarryBackground />

      <div className="relative z-10 px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        {/* Section Title */}
        <div id="projects" className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-white">🚀 My Stellar Creations ✨</h1>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-xl font-medium leading-relaxed text-[#E0B0FF] animate-pulse animate-flicker"
          >
            Showcasing my work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {ProjectsData.map((project, projectIndex) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              key={project.id}
              className="group relative flex flex-col h-[28rem] w-[90%] mx-auto shadow-xl transition-all duration-500 rounded-3xl overflow-hidden bg-[#0f3460] transform hover:scale-[1.1] hover:rotate-1 hover:skew-y-1 hover:shadow-[#E0B0FF]/70 hover:brightness-125 hover:-translate-y-3 hover:transition-transform hover:ease-out hover:border-2 hover:border-[#E0B0FF] hover:shadow-neon animate-hover-wobble"
            >
              {/* Single Project Image */}
              <div className="h-[28rem] w-full relative">
                <img
                  src={project.image[0]}
                  alt={`${project.name}-main`}
                  className="h-full w-full object-cover object-center animate-rotateIn"
                />
              </div>

              {/* Overlay Effect */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#1a1a2e]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-slideInUp">
                <h3 className="text-3xl font-bold text-[#fff8f9] mb-2 animate-jumpIn drop-shadow-lg animate-bounceIn">{project.name}</h3>
                <p className="px-4 text-lg text-[#E0B0FF] italic animate-fadeInUp delay-200 drop-shadow-md animate-slideInLeft animate-delay-300">{project.description}</p>

                {/* Technologies Used */}
                <div className="flex gap-3 flex-wrap justify-center items-center mt-4 animate-fadeInUp delay-300 animate-slideInRight animate-zoomIn">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-[#E0B0FF] to-[#fff8f9] text-[#1a1a2e] text-sm font-semibold px-3 py-1 rounded-full shadow-md transform hover:scale-125 transition-all duration-300 animate-spin-slow hover:shadow-neon"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 justify-center items-center mt-6 text-2xl animate-fadeInUp delay-500 animate-zoomIn animate-wiggle">
                  {project.id === 6 ? (
                    <a className="text-[#1a1a2e] text-xl bg-[#fff7f8] rounded-full p-3 hover:scale-125 transition-transform duration-300 animate-float" href="https://www.figma.com/design/yF856FVLz5RP2Wgyv0lIdC/ECO-FRIENDLY-ECOMMERCE?node-id=235-9823&t=36hkmep7i2Qf1FJq-1" target="_blank" rel="noopener noreferrer">
                      <SiFigma />
                    </a>
                  ) : (
                    <a className="text-[#1a1a2e] text-xl bg-[#fff7f8] rounded-full p-3 hover:scale-125 transition-transform duration-300 animate-float" href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

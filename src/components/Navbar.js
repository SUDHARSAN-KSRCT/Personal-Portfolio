import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Navlinks from "../data/navlinks";
import ProfileData from "../data/profile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-gradient-to-r from-[#5A3E9C] to-[#7D5FB2] shadow-lg backdrop-blur-md">
      <div className="mx-auto py-3 px-5 flex flex-row justify-between lg:justify-around items-center lg:py-4 transition-all duration-300">
        <nav
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden md:mx-auto lg:flex flex-wrap items-center text-lg justify-center gap-12"
        >
          {Navlinks.map((item) => {
            return (
              <Link
                key={item.title}
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
                to={item.link}
                className="cursor-pointer relative text-white transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#BFA8E0] after:left-1/2 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#D9C2FF]"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="lg:hidden mr-2"
        >
          <button onClick={toggleMenu} className="p-2 text-white hover:scale-110 transition-transform duration-300">
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        <button
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden lg:flex items-center justify-center w-fit hover:scale-105 transition-transform duration-300"
        >
          <a
            href={ProfileData.resume}
            target="_blank"
            rel="noreferrer"
            className="leading-none text-white bg-[#BFA8E0] py-3 px-10 rounded-lg font-medium text-lg hover:bg-gradient-to-r from-[#9D7AC3] to-[#BFA8E0] transition-all duration-300"
          >
            Resume
          </a>
        </button>
        {isMenuOpen && (
          <div className="min-h-[calc(100vh-4rem)] absolute inset-x-0 top-16 z-50 bg-white/10 backdrop-blur-lg shadow-lg px-5 pb-4 rounded-b-lg lg:hidden transition-all ease-in duration-700">
            <nav className="flex flex-col gap-y-7 text-xl">
              {Navlinks.map((item) => {
                return (
                  <Link
                    key={item.title}
                    onClick={() => setIsMenuOpen(false)}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={750}
                    to={item.link}
                    className="cursor-pointer text-white relative transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#BFA8E0] after:left-1/2 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-[#D9C2FF]"
                  >
                    {item.title}
                  </Link>
                );
              })}
              <a
                href={ProfileData.resume}
                target="_blank"
                rel="noreferrer"
                className="text-white bg-[#BFA8E0] py-2.5 px-10 rounded-lg font-medium text-lg w-fit mx-auto hover:bg-gradient-to-r from-[#9D7AC3] to-[#BFA8E0] transition-all duration-300"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
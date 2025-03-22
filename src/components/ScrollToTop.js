import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? "fixed bottom-6 right-6 opacity-100" : "opacity-0 pointer-events-none"
      } bg-[#512D80] p-3 rounded-full text-white shadow-md transition-all duration-300 ease-in-out hover:bg-[#674EA7] hover:shadow-lg flex items-center justify-center`}
    >
      <FaChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
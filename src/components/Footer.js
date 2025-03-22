import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#674EA7] text-white overflow-hidden h-32">
      {/* SVG Wave with Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24 animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C300,150 900,-30 1200,60 L1200,120 L0,120 Z" fill="#563D7C" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-8 text-center relative z-10">
        <p className="text-sm opacity-80 animate-fadeIn">
          Crafted with 💜 by <span className="font-semibold text-[#25143c]">Sudharsan</span>
        </p>
      </div>

      
    </footer>
  );
};

export default Footer;

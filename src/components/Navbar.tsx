import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
import Search from "./search";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] border-b border-[rgba(26,60,52,0.08)] transition-all duration-300 ${
        isScrolled ? "shadow-sm py-2" : "py-0"
      }`}
      style={{ backdropFilter: "blur(15px)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-[70px]">
        <Logo />
        <ul
          className={`md:flex list-none gap-6 items-center bg-teal-50 py-3 px-7 rounded-[30px] shadow-sm ${
            isMobileOpen
              ? "flex flex-col absolute top-[70px] left-0 w-full bg-white/98 p-6 gap-2 shadow-lg rounded-[16px] mt-2 animate-slideInMenu"
              : "hidden md:flex md:static md:w-auto md:bg-teal-50 md:p-[0.8rem_1.8rem] md:shadow-sm md:rounded-[30px] md:mt-0"
          }`}
        >
          <li>
            <a
              href="#home"
              className="text-text font-medium transition-all py-3 px-5 rounded-[20px] text-[0.95rem] hover:text-white hover:bg-gradient-to-br from-primary to-accent hover:translate-y-[-1px] hover:shadow-sm active:text-white active:bg-gradient-to-br from-primary to-accent"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#videos"
              className="text-text font-medium transition-all py-3 px-5 rounded-[20px] text-[0.95rem] hover:text-white hover:bg-gradient-to-br from-primary to-accent hover:translate-y-[-1px] hover:shadow-sm"
            >
              3D Architectural Designs
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-text font-medium transition-all py-3 px-5 rounded-[20px] text-[0.95rem] hover:text-white hover:bg-gradient-to-br from-primary to-accent hover:translate-y-[-1px] hover:shadow-sm"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-text font-medium transition-all py-3 px-5 rounded-[20px] text-[0.95rem] hover:text-white hover:bg-gradient-to-br from-primary to-accent hover:translate-y-[-1px] hover:shadow-sm"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-text font-medium transition-all py-3 px-5 rounded-[20px] text-[0.95rem] hover:text-white hover:bg-gradient-to-br from-primary to-accent hover:translate-y-[-1px] hover:shadow-sm"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-gradient-to-br from-primary to-accent text-white py-3 px-7 rounded-[25px] font-semibold transition-all ml-4 shadow-sm hover:translate-y-[-2px] hover:shadow-lg hover:bg-gradient-to-br from-accent to-primary-light border-2 border-transparent hover:border-teal-200"
            >
              Get Quote
            </a>
          </li>
        </ul>
        <div
          className="md:hidden flex flex-col cursor-pointer p-2 rounded-md transition-all bg-accent hover:bg-teal-100"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-primary my-[3px] rounded-[2px] transition-all duration-300 ${
              isMobileOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-primary my-[3px] rounded-[2px] transition-all duration-300 ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-primary my-[3px] rounded-[2px] transition-all duration-300 ${
              isMobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

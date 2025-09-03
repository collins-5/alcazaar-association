import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faLeaf,
  faUsers,
  faVrCardboard,
  faPlay,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <section
      className="h-screen relative flex items-center justify-center text-center text-white overflow-hidden min-h-[600px] pt-[100px] pb-[100px]"
      id="home"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2] min-h-[600px] bg-black"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-modern-minimalist-house-exterior-4360-large.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-modern-minimalist-house-exterior-4360-small.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[rgba(4,73,250,0.8)] to-[rgba(23,226,8,0.7)] z-[-1]"></div>
      <div className="max-w-[1000px] px-6 relative z-[2] w-full">
        <div className="text-[1.1rem] font-semibold text-accent-light mb-4 uppercase tracking-[2px]">
          Professional Architect
        </div>
        <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-extrabold mb-6 bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent leading-[1.4]">
          Transforming Visions Into Architectural Masterpieces
        </h1>
        <p className="text-[clamp(0.9rem,2.5vw,1.3rem)] mb-[2.5rem] opacity-95 max-w-[650px] mx-auto leading-[1.8]">
          Creating exceptional spaces that blend innovation, sustainability, and
          timeless design. From conceptual sketches to completed structures,
          every project tells a unique story of architectural excellence.
        </p>
        <div className="flex justify-center gap-12 mb-[2.5rem] flex-wrap">
          <div className="flex flex-col items-center gap-2 text-[0.95rem] opacity-90 bg-[rgba(255,255,255,0.15)] p-5 rounded-xl backdrop-blur-md border border-[rgba(255,255,255,0.2)] transition-all hover:translate-y-[-4px] hover:bg-[rgba(255,255,255,0.25)]">
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-accent-light text-[1.8rem] mb-2"
            />
            <span>Award-Winning</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-[0.95rem] opacity-90 bg-[rgba(255,255,255,0.15)] p-5 rounded-xl backdrop-blur-md border border-[rgba(255,255,255,0.2)] transition-all hover:translate-y-[-4px] hover:bg-[rgba(255,255,255,0.25)]">
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-accent-light text-[1.8rem] mb-2"
            />
            <span>Sustainable Design</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-[0.95rem] opacity-90 bg-[rgba(255,255,255,0.15)] p-5 rounded-xl backdrop-blur-md border border-[rgba(255,255,255,0.2)] transition-all hover:translate-y-[-4px] hover:bg-[rgba(255,255,255,0.25)]">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-accent-light text-[1.8rem] mb-2"
            />
            <span>150+ Happy Clients</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-[0.95rem] opacity-90 bg-[rgba(255,255,255,0.15)] p-5 rounded-xl backdrop-blur-md border border-[rgba(255,255,255,0.2)] transition-all hover:translate-y-[-4px] hover:bg-[rgba(255,255,255,0.25)]">
            <FontAwesomeIcon
              icon={faVrCardboard}
              className="text-accent-light text-[1.8rem] mb-2"
            />
            <span>3D Visualization</span>
          </div>
        </div>
        <div className="flex gap-5 justify-center flex-wrap">
          <a
            href="#videos"
            className="px-9 py-4 rounded-[40px] no-underline font-semibold transition-all border-none cursor-pointer text-[0.95rem] inline-flex items-center gap-2 min-w-[44px] min-h-[44px] bg-gradient-to-br from-primary to-accent text-white shadow-sm hover:translate-y-[-2px] hover:shadow-lg hover:bg-gradient-to-br from-accent to-primary-light"
          >
            <FontAwesomeIcon icon={faPlay} />
            Watch 3D architectural designs
          </a>
          <a
            href="#contact"
            className="px-9 py-4 rounded-[40px] no-underline font-semibold transition-all border-none cursor-pointer text-[0.95rem] inline-flex items-center gap-2 min-w-[44px] min-h-[44px] bg-transparent text-white border-2 border-white backdrop-blur-md hover:bg-white hover:text-primary hover:translate-y-[-2px] hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faRocket} />
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Videos from "./components/3dArchitecturalDesigns";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";
import BackToTop from "./components/BackToTop";
import ProgressBar from "./components/ProgressBar";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  return (
    <div>
      <ProgressBar />
      <Navbar />
      <Hero />
      <Videos openModal={openModal} />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <VideoModal isOpen={isModalOpen} src={videoSrc} onClose={closeModal} />
      <BackToTop />
    </div>
  );
};

export default App;

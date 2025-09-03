import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faClock } from "@fortawesome/free-solid-svg-icons";

interface VideosProps {
  openModal: (src: string) => void;
}

const Videos: React.FC<VideosProps> = ({ openModal }) => {
  const videos = [
    {
      id: "video1",
      src: "https://assets.mixkit.co/videos/preview/mixkit-modern-minimalist-house-exterior-4360-large.mp4",
      category: "Residential • 3D Tour",
      title: "Modern Villa 3D Walkthrough",
      description:
        "Take an immersive journey through a luxury villa design featuring contemporary architecture and sustainable features.",
      views: "2.5K",
      duration: "3:45",
    },
    {
      id: "video2",
      src: "https://assets.mixkit.co/videos/preview/mixkit-modern-building-lobby-4359-large.mp4",
      category: "Commercial • Animation",
      title: "Office Complex Visualization",
      description:
        "Explore the design process and final visualization of a state-of-the-art office complex with innovative workspace solutions.",
      views: "1.8K",
      duration: "4:12",
    },
    {
      id: "video3",
      src: "https://assets.mixkit.co/videos/preview/mixkit-modern-eco-friendly-house-4361-large.mp4",
      category: "Sustainable • Process",
      title: "Green Building Design Process",
      description:
        "Behind-the-scenes look at designing sustainable architecture with renewable energy integration and eco-friendly materials.",
      views: "3.2K",
      duration: "5:20",
    },
    {
      id: "video4",
      src: "https://assets.mixkit.co/videos/preview/mixkit-urban-cityscape-aerial-view-4362-large.mp4",
      category: "Urban • Planning",
      title: "Urban Development Masterplan",
      description:
        "Comprehensive 3D visualization of a mixed-use urban development featuring residential, commercial, and recreational spaces.",
      views: "4.1K",
      duration: "6:33",
    },
    {
      id: "video5",
      src: "https://assets.mixkit.co/videos/preview/mixkit-luxury-modern-interior-4363-large.mp4",
      category: "Interior • Design",
      title: "Luxury Interior Visualization",
      description:
        "Stunning 3D interior design showcase featuring modern luxury finishes and sophisticated spatial arrangements.",
      views: "2.9K",
      duration: "4:57",
    },
    {
      id: "video6",
      src: "https://assets.mixkit.co/videos/preview/mixkit-cultural-center-exterior-4364-large.mp4",
      category: "Cultural • Heritage",
      title: "Cultural Center 3D Experience",
      description:
        "Immersive visualization of a cultural center design that blends traditional African architecture with modern innovation.",
      views: "3.7K",
      duration: "5:14",
    },
  ];

  return (
    <section
      className="py-2 bg-gradient-to-br from-teal-50 to-gray-light"
      id="videos"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-center font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold mb-5 text-primary relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-accent after:rounded">
          3D Architecture Visualizations
        </h2>
        <p className="text-center text-[1.1rem] text-text-light mb-12 max-w-[550px] mx-auto">
          Experience architecture like never before through immersive 3D
          walkthroughs and visualizations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:translate-y-[-8px] hover:shadow-xl"
            >
              <div className="relative w-full h-[280px] overflow-hidden">
                <video
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-600 hover:scale-105"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[rgba(26,60,52,0.65)] to-[rgba(74,128,118,0.65)] flex items-center justify-center opacity-0 transition-opacity hover:opacity-100 cursor-pointer"
                  onClick={() => openModal(video.src)}
                >
                  <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center text-primary text-[1.8rem] transition-all hover:bg-white hover:scale-105">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-accent font-semibold uppercase text-[0.85rem] tracking-wide mb-2">
                  {video.category}
                </div>
                <h3 className="text-primary text-[1.3rem] mb-4 font-semibold">
                  {video.title}
                </h3>
                <p className="text-text-light leading-6 mb-5">
                  {video.description}
                </p>
                <div className="flex gap-6 text-text-light text-[0.9rem]">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlay} />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;

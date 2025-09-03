import React from "react";

interface VideoModalProps {
  isOpen: boolean;
  src: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, src, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-[2000] inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300">
      <div className="relative w-[90vw] max-w-4xl max-h-[85vh] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        <button
          className="absolute top-4 right-4 text-2xl text-white bg-teal-500/80 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-teal-400 hover:scale-105 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <video controls className="w-full h-auto max-h-[85vh] object-contain">
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoModal;

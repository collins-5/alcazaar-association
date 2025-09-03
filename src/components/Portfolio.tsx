import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      category: "Residential",
      title: "Modern Villa",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "A luxurious villa with sustainable features.",
    },
    {
      id: 2,
      category: "Commercial",
      title: "Office Complex",
      image: "https://images.unsplash.com/photo-1486946255434-2466348c2166",
      description: "A state-of-the-art office space.",
    },
    {
      id: 3,
      category: "Residential",
      title: "Eco House",
      image: "https://images.unsplash.com/photo-1613973111942-7c7a138f4f2d",
      description: "A sustainable residential design.",
    },
    {
      id: 4,
      category: "Urban",
      title: "City Masterplan",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "A mixed-use urban development.",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      className="py-2 bg-gradient-to-br from-teal-50 to-gray-light"
      id="portfolio"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-center font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold mb-5 text-primary relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-accent after:rounded">
          Our Portfolio
        </h2>
        <p className="text-center text-[1.1rem] text-text-light mb-12 max-w-[550px] mx-auto">
          Explore our diverse range of architectural projects, from residential
          to urban developments.
        </p>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["all", "Residential", "Commercial", "Urban"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold text-[0.95rem] transition-all ${
                filter === category
                  ? "bg-gradient-to-br from-primary to-accent text-white"
                  : "bg-white text-text-light border border-gray-medium"
              } hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:translate-y-[-8px] hover:shadow-xl"
            >
              <div className="relative w-full h-[280px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-600 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,60,52,0.65)] to-[rgba(74,128,118,0.65)] flex items-center justify-center opacity-0 transition-opacity hover:opacity-100 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="text-white text-2xl"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-primary text-[1.3rem] font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-text-light mb-4">{project.description}</p>
                <span className="text-accent font-semibold uppercase text-[0.85rem]">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faVrCardboard,
  faLeaf,
  faCity,
  faDraftingCompass,
} from "@fortawesome/free-solid-svg-icons";

const Services: React.FC = () => {
  return (
    <section
      className="py-2 bg-gradient-to-br from-teal-50 to-white"
      id="services"
      data-aos="fade-up"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-center font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold mb-5 text-primary relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-accent after:rounded">
          Comprehensive Architectural Services
        </h2>
        <p
          className="text-center text-[1.1rem] text-text-light mb-12 max-w-[550px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From initial concept to final construction, I provide end-to-end
          architectural solutions tailored to your unique needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          <div
            className="relative bg-white p-[2.5rem_2rem] rounded-[20px] shadow-lg text-center transition-all hover:translate-y-[-10px] hover:shadow-xl hover:border-accent border-2 border-transparent"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-accent"></div>
            <FontAwesomeIcon
              icon={faHome}
              className="text-accent text-[3.5rem] mb-6 block transition-all hover:text-primary hover:scale-[1.08]"
            />
            <h3 className="text-primary text-[1.5rem] font-semibold mb-5">
              Residential Architecture
            </h3>
            <p className="text-text-light mb-6 leading-[1.7]">
              Custom homes designed to reflect your lifestyle, preferences, and
              dreams. From modern minimalist designs to traditional
              African-inspired architecture.
            </p>
            <ul className="list-none text-left">
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Custom Home Design
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Interior Space Planning
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Landscape Integration
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Smart Home Technology
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Energy Efficiency Optimization
              </li>
            </ul>
          </div>
          <div
            className="relative bg-white p-[2.5rem_2rem] rounded-[20px] shadow-lg text-center transition-all hover:translate-y-[-10px] hover:shadow-xl hover:border-accent border-2 border-transparent"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-accent"></div>
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-accent text-[3.5rem] mb-6 block transition-all hover:text-primary hover:scale-[1.08]"
            />
            <h3 className="text-primary text-[1.5rem] font-semibold mb-5">
              Commercial Architecture
            </h3>
            <p className="text-text-light mb-6 leading-[1.7]">
              Innovative commercial spaces designed to drive business success,
              enhance productivity, and create memorable brand experiences.
            </p>
            <ul className="list-none text-left">
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Office Building Design
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Retail Space Planning
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Mixed-Use Developments
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Industrial Facilities
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Hospitality Projects
              </li>
            </ul>
          </div>
          <div
            className="relative bg-white p-[2.5rem_2rem] rounded-[20px] shadow-lg text-center transition-all hover:translate-y-[-10px] hover:shadow-xl hover:border-accent border-2 border-transparent"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-accent"></div>
            <FontAwesomeIcon
              icon={faVrCardboard}
              className="text-accent text-[3.5rem] mb-6 block transition-all hover:text-primary hover:scale-[1.08]"
            />
            <h3 className="text-primary text-[1.5rem] font-semibold mb-5">
              3D Visualization
            </h3>
            <p className="text-text-light mb-6 leading-[1.7]">
              Cutting-edge 3D modeling and visualization services that bring
              your project to life before construction begins.
            </p>
            <ul className="list-none text-left">
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Architectural 3D Rendering
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Virtual Reality Tours
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Animation & Walkthroughs
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Interactive Presentations
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                BIM Modeling Services
              </li>
            </ul>
          </div>
          <div
            className="relative bg-white p-[2.5rem_2rem] rounded-[20px] shadow-lg text-center transition-all hover:translate-y-[-10px] hover:shadow-xl hover:border-accent border-2 border-transparent"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-accent"></div>
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-accent text-[3.5rem] mb-6 block transition-all hover:text-primary hover:scale-[1.08]"
            />
            <h3 className="text-primary text-[1.5rem] font-semibold mb-5">
              Sustainable Design
            </h3>
            <p className="text-text-light mb-6 leading-[1.7]">
              Eco-friendly architecture that minimizes environmental impact
              while maximizing occupant comfort and building performance.
            </p>
            <ul className="list-none text-left">
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                LEED Certification Support
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Renewable Energy Integration
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Water Conservation Systems
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Sustainable Material Selection
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Passive Design Strategies
              </li>
            </ul>
          </div>
          <div
            className="relative bg-white p-[2.5rem_2rem] rounded-[20px] shadow-lg text-center transition-all hover:translate-y-[-10px] hover:shadow-xl hover:border-accent border-2 border-transparent"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-accent"></div>
            <FontAwesomeIcon
              icon={faCity}
              className="text-accent text-[3.5rem] mb-6 block transition-all hover:text-primary hover:scale-[1.08]"
            />
            <h3 className="text-primary text-[1.5rem] font-semibold mb-5">
              Urban Planning
            </h3>
            <p className="text-text-light mb-6 leading-[1.7]">
              Comprehensive urban development strategies that create vibrant,
              sustainable communities while preserving cultural heritage.
            </p>
            <ul className="list-none text-left">
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Master Planning
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Zoning Analysis
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Community Development
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Infrastructure Planning
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Public Space Design
              </li>
            </ul>
          </div>
          <div
            className="relative bg-white p-[2.5rem_2rem] rounded-[20px] shadow-lg text-center transition-all hover:translate-y-[-10px] hover:shadow-xl hover:border-accent border-2 border-transparent"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-accent"></div>
            <FontAwesomeIcon
              icon={faDraftingCompass}
              className="text-accent text-[3.5rem] mb-6 block transition-all hover:text-primary hover:scale-[1.08]"
            />
            <h3 className="text-primary text-[1.5rem] font-semibold mb-5">
              Design Consultation
            </h3>
            <p className="text-text-light mb-6 leading-[1.7]">
              Expert architectural guidance and professional advice to help you
              make informed decisions about your project.
            </p>
            <ul className="list-none text-left">
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Site Analysis & Feasibility
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Design Review & Optimization
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Building Code Compliance
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Construction Documentation
              </li>
              <li className="py-2 pl-7 relative text-text-light transition-all hover:text-primary hover:translate-x-1 before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold before:text-base">
                Project Cost Estimation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

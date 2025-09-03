import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-primary-dark text-white py-2"
      id="footer"
      data-aos="fade-up"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-2 mb-6">
             <Logo/>
            </div>
            <p className="text-gray-light text-[0.95rem] mb-6 leading-[1.7]">
              Creating exceptional spaces that blend innovation, sustainability,
              and timeless design across East Africa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="text-white text-[1.2rem] hover:text-accent transition-all"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white text-[1.2rem] hover:text-accent transition-all"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white text-[1.2rem] hover:text-accent transition-all"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white text-[1.2rem] hover:text-accent transition-all"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-serif text-[1.4rem] font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="list-none text-[0.95rem] space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="font-serif text-[1.4rem] font-semibold mb-6 text-white">
              Our Services
            </h3>
            <ul className="list-none text-[0.95rem] space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  Residential Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  Commercial Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  3D Visualization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  Sustainable Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  Urban Planning
                </a>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <h3 className="font-serif text-[1.4rem] font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="list-none text-[0.95rem] space-y-3">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-accent text-[1rem] hover:text-accent-light transition-all"
                />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-accent text-[1rem] hover:text-accent-light transition-all"
                />
                <a
                  href="mailto:info@alcaazaar.com"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  info@alcaazaar.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-accent text-[1rem] hover:text-accent-light transition-all"
                />
                <a
                  href="tel:+254123456789"
                  className="text-gray-light hover:text-accent transition-all"
                >
                  +254 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-[0.9rem] text-gray-light border-t border-white/20 pt-6">
          &copy; {new Date().getFullYear()} Alcaazaar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

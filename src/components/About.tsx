import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBuilding,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <section className="py-2 bg-black" id="about" data-aos="fade-up">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-center font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold mb-5 text-primary relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-accent after:rounded">
          About Titus Oduor
        </h2>
        <p
          className="text-center text-[1.1rem] text-text-light mb-12 max-w-[550px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Passionate about creating spaces that inspire, function beautifully,
          and stand the test of time
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="about-text" data-aos="fade-right">
            <h3 className="font-serif text-[2.2rem] mb-6 text-primary leading-[1.3]">
              Architectural Excellence Since 2012
            </h3>
            <p className="mb-5 text-text-light leading-[1.8]">
              With over 12 years of dedicated experience in architectural
              design, I have established myself as a leading architect in Kenya
              and East Africa. My journey began with a deep fascination for how
              spaces can transform human experiences and communities.
            </p>
            <p className="mb-5 text-text-light leading-[1.8]">
              I specialize in creating sustainable, functional, and
              aesthetically stunning spaces that respond to local climate,
              culture, and context. My approach combines traditional
              architectural wisdom with cutting-edge technology, environmental
              consciousness, and innovative design solutions.
            </p>
            <p className="mb-5 text-text-light leading-[1.8]">
              From intimate residential homes to landmark commercial buildings,
              each project represents a collaborative journey with clients to
              realize their vision while exceeding their expectations.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-5 mt-6">
              <div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 transition-all hover:translate-y-[-4px] hover:shadow-lg hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <span className="block text-[2.2rem] font-extrabold text-primary hover:text-white">
                  150+
                </span>
                <span>Projects</span>
              </div>
              <div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 transition-all hover:translate-y-[-4px] hover:shadow-lg hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <span className="block text-[2.2rem] font-extrabold text-primary hover:text-white">
                  25
                </span>
                <span>Awards</span>
              </div>
              <div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border-2 border-teal-100 transition-all hover:translate-y-[-4px] hover:shadow-lg hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span className="block text-[2.2rem] font-extrabold text-primary hover:text-white">
                  98%
                </span>
                <span>Satisfaction</span>
              </div>
            </div>
          </div>
          <div
            className="rounded-[20px] overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              srcSet="
                https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80 300w,
                https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80 600w,
                https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80 800w
              "
              sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 800px"
              alt="Titus Oduor - Professional Architect"
              className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-[1.06]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

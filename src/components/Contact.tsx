import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = () => {
    if (Object.values(formData).every((v) => v)) {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <section className="py-2 bg-[#10e2a3] text-white" id="contact">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-center font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold mb-5 text-primary relative after:content-[''] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-accent after:rounded">
          Get In Touch
        </h2>
        <p className="text-center text-[1.1rem] text-text-light mb-12 max-w-[550px] mx-auto">
          Let's collaborate to bring your vision to life. Contact me today to
          discuss your project!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-4xl mb-6">
              Start Your Project Today
            </h3>
            <p className="text-[1.05rem] mb-10 opacity-90 leading-7">
              Whether you're planning a dream home, a commercial space, or an
              urban development, I'm here to provide expert guidance and
              innovative solutions.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5 p-5 bg-white/15 rounded-2xl backdrop-blur-md border border-white/20 transition-all hover:translate-x-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-xl w-6 text-center"
                />
                <div>
                  <strong>Email</strong>
                  <br />
                  <a href="mailto:info@oduorarchitecture.com">
                    info@oduorarchitecture.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 bg-white/15 rounded-2xl backdrop-blur-md border border-white/20 transition-all hover:translate-x-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white text-xl w-6 text-center"
                />
                <div>
                  <strong>Phone</strong>
                  <br />
                  <a href="tel:+254123456789">+254 123 456 789</a>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 bg-white/15 rounded-2xl backdrop-blur-md border border-white/20 transition-all hover:translate-x-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-white text-xl w-6 text-center"
                />
                <div>
                  <strong>Office</strong>
                  <br />
                  Nairobi, Kenya
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/15 p-10 rounded-2xl backdrop-blur-md border border-white/20">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-[0.95rem]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-4 rounded-xl bg-white/95 text-text text-[0.95rem] focus:outline-none focus:bg-white focus:shadow-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-[0.95rem]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-4 rounded-xl bg-white/95 text-text text-[0.95rem] focus:outline-none focus:bg-white focus:shadow-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="projectType"
                className="block mb-2 font-medium text-[0.95rem]"
              >
                Project Type
              </label>
              <input
                type="text"
                id="projectType"
                placeholder="e.g., Residential, Commercial"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full p-4 rounded-xl bg-white/95 text-text text-[0.95rem] focus:outline-none focus:bg-white focus:shadow-sm"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-[0.95rem]"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-4 rounded-xl bg-white/95 text-text text-[0.95rem] h-32 resize-none focus:outline-none focus:bg-white focus:shadow-sm"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white font-semibold text-[0.95rem] flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

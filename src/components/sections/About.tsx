import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <div className="max-w-[250px] w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-white rounded-2xl p-8 flex flex-col items-center justify-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default"
    >
      <img
        src={icon}
        alt={title}
        className="h-16 w-16 object-contain mb-6"
      />

      <h3 className="text-center text-[20px] font-bold text-primary">
        {title}
      </h3>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <div className="flex flex-col h-full relative">
      <div className="relative z-10 flex flex-col items-center">
        {/* Large Decorative Title with Flipped Shadow */}
        <div className="relative mb-32 mt-20 w-full flex justify-center">
          {/* Flipped Text Shadow (Reflected) */}
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            className="absolute -bottom-1/2 text-[120px] md:text-[200px] lg:text-[250px] font-black text-red-600 select-none uppercase -scale-y-100 blur-[2px] pointer-events-none"
          >
            OVERVIEW
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-[80px] md:text-[150px] lg:text-[200px] font-black leading-none tracking-tighter text-red-600 select-none uppercase z-10"
          >
            OVERVIEW
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-full left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[60%] md:top-1/4 w-full max-w-md mt-10 md:mt-0 z-20"
          >
            <p className="text-black font-semibold text-base md:text-lg leading-relaxed bg-white/80 backdrop-blur-xl p-6 border-l-8 border-red-600 shadow-2xl">
              {config.sections.about.content}
            </p>
          </motion.div>
        </div>

        {/* Section Tags */}
        <div className="flex justify-between items-center w-full mb-10 border-t border-red-600/10 pt-4">
          <p className="text-red-600 font-bold uppercase tracking-[8px] text-xs">
            / {config.sections.about.p}
          </p>
          <p className="text-red-600 font-bold uppercase tracking-[2px] text-xs hidden md:block">
            // INNOVATION // DESIGN // SCALE
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about", "bg-white relative after:absolute after:top-1/2 after:left-0 after:w-full after:h-[1px] after:bg-red-600/10 before:absolute before:top-0 before:left-1/2 before:w-[1px] before:h-full before:bg-red-600/10 overflow-hidden");

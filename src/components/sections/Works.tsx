import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

import { technologies } from "../../constants";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative group cursor-pointer overflow-hidden rounded-lg h-[280px]"
      onClick={() => window.open(sourceCodeLink, "_blank")}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
        <h3 className="text-white font-bold text-[24px] mb-4">{name}</h3>

        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => {
            const tech = technologies.find(
              (t) => t.name.toLowerCase().includes(tag.name.toLowerCase()) ||
                tag.name.toLowerCase().includes(t.name.toLowerCase())
            );

            return (
              <div
                key={`${name}-${tag.name}`}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 border border-white/20 hover:scale-110 transition-transform"
                title={tag.name}
              >
                {tech ? (
                  <img
                    src={tech.icon}
                    alt={tag.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-[10px] text-white font-bold uppercase">
                    {tag.name.slice(0, 2)}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-white/80 text-[12px] line-clamp-2 max-w-[200px]">
          {description}
        </p>

        <button
          className="mt-6 bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Preview Template
        </button>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header
        useMotion={true}
        {...config.sections.works}
        titleColor="text-primary"
        subtitleColor="text-black/60"
      />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-black/70 text-[17px] max-w-3xl leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work", "bg-white");

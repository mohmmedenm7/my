import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { projects } from "../../constants";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full bg-[#050816] text-white overflow-hidden flex items-center justify-center">
      {/* Background Scrolling Works */}
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="flex flex-col gap-4 rotate-12 scale-150">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {projects.slice(0, 3).map((project, i) => (
              <img
                key={i}
                src={project.image}
                alt=""
                className="w-80 h-48 object-cover rounded-xl"
              />
            ))}
            {projects.slice(0, 3).map((project, i) => (
              <img
                key={`dup-${i}`}
                src={project.image}
                alt=""
                className="w-80 h-48 object-cover rounded-xl"
              />
            ))}
          </motion.div>
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {projects.slice(0, 3).reverse().map((project, i) => (
              <img
                key={i}
                src={project.image}
                alt=""
                className="w-80 h-48 object-cover rounded-xl"
              />
            ))}
            {projects.slice(0, 3).reverse().map((project, i) => (
              <img
                key={`dup-rev-${i}`}
                src={project.image}
                alt=""
                className="w-80 h-48 object-cover rounded-xl"
              />
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[#050816]/60" />
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-full gap-8 z-10">
        {/* Image with Glow */}
        <div className="relative flex justify-center items-center">
          <div className="w-64 h-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <img
              src="/WhatsApp Image 2026-01-19 at 9.23.54 AM.jpeg"
              alt="My Photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow behind image */}
          <div className="absolute w-[320px] h-[320px] bg-gradient-to-b from-[#915EFF33] to-transparent rounded-3xl blur-3xl animate-pulse z-0" />
        </div>

        {/* Text */}
        <div className="text-center px-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className="text-sm sm:text-base mt-4 text-white-100 leading-relaxed">
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full bg-hero-pattern bg-cover bg-center bg-no-repeat text-white overflow-hidden">
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-full gap-8 z-10">
        {/* Image with Glow */}
        <div className="relative flex justify-center items-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <img
              src="/my photo.jpeg" // ✅ Replace with your image
              alt="My Photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow behind image */}
          <div className="absolute w-[320px] h-[320px] bg-gradient-to-b from-[#ffffff33] to-transparent rounded-full blur-3xl animate-pulse z-0" />
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center z-20">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

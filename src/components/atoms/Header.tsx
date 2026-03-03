import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { textVariant } from "../../utils/motion";

interface IHeader {
  useMotion: boolean;
  p: string;
  h2: string;
  titleColor?: string;
  subtitleColor?: string;
}

export const Header: React.FC<IHeader> = ({
  useMotion,
  p,
  h2,
  titleColor = "text-white",
  subtitleColor = "text-secondary",
}) => {
  const Content = () => (
    <>
      <p className={`${styles.sectionSubText} ${subtitleColor}`}>{p}</p>
      <h2 className={`${styles.sectionHeadText} ${titleColor}`}>{h2}</h2>
    </>
  );

  return useMotion === true ? (
    <motion.div variants={textVariant()}>
      <Content />
    </motion.div>
  ) : (
    <Content />
  );
};

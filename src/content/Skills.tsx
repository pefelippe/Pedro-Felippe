import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import SkillBox from "../components/SkillBox";
import { technologies } from "../constants";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
      className="max-w-5xl w-full gap-10  flex max-lg:flex-col justify-between  lg:gap-20 items-center text-white lg:mx-auto"
    >
      <motion.h2
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-[2.5rem] md:text-[3rem] leading-tight font-semibold dark:text-white
        underline decoration-blue  max-w-sm w-fit mx-auto text-center"
      >
        Tecnologias e ferramentas
      </motion.h2>
      <motion.div className="gap-10 md:gap-20 grid w-fit grid-cols-4 max-md:grid-cols-3">
        {technologies.map((tech) => {
          return (
            <SkillBox
              title={tech.name}
              description={tech.description}
              key={tech.name}
            >
              <Image width={80} height={80} src={tech.imgUrl} alt={tech.name} />
            </SkillBox>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Skills;

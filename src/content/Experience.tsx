import { motion } from "framer-motion";
import React from "react";

import ExperienceCard from "../components/ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-fit flex items-center flex-col relative overflow-hidden  rounded-lg  py-10  lg:mx-20 mx-5"
    >
      <h4 className="text-4xl font-semibold">E minha Experiência ?</h4>
      <div className="w-full flex space-x-8 overflow-x-scroll snap-x snap-mandatory text-white pt-5 max-w-7xl">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;

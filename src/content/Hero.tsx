/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero-container"
      className="content-intern items-start w-full"
    >
      <motion.div className="flex flex-col items-start  max-w-3xl  w-full">
        <h3 className="text-xl lg:text-3xl  font-semibold pb-2">
          Hi, I'm Pedro Felippe 👋
        </h3>
        <motion.h1 className="text-5xl lg:text-7xl  font-extrabold ">
          I project, code and grow internet software.
        </motion.h1>

        <motion.h3 className="text-lg lg:text-2xl font-normal max-w-2xl text-gray-700 py-4 pb-6 ">
          Solving complex industry problems and creating simple yet powerful
          solutions.
        </motion.h3>

        <motion.div
          className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 max-w-sm"
        >
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero-container"
      className="content-intern relative w-full items-center 
    text-center gap-4  mx-auto"
    >
      {/* <motion.img
        src="./assets/avatar-pdr.png"
        className="rounded-full  shadow max-w-[120px] "
      /> */}
      <motion.div className="flex flex-col  font-extrabold max-w-5xl">
        <p className="text-4xl lg:text-6xl lg:tracking-tight leading-tight">
          I am Pedro Felippe — Frontend Developer based in Brazil.
        </p>
        <p className="text-xl lg:text-2xl tracking-tight font-extralight py-4 pb-2">
          I create simple solutions for complex problems.
        </p>
        <div className="flex w-fit mx-auto items-center gap-3 justify-center  ">
          <AnimatedBtn
            target="_blank"
            className="p-1 rounded-md bg-white"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-8 w-8 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn
            href="https://github.com/pefelippe"
            className="p-2 rounded-md bg-white"
          >
            <GitHubLogoIcon className="h-8 w-8 hover:text-blue" />
          </AnimatedBtn>
        </div>
      </motion.div>
    </motion.div>
  );
}

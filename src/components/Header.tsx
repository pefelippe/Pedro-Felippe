import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className="min-h-[10vh]  h-fit flex z-40  mx-auto  text-[20px]  rounded max-w-7xl
       font-semibold  justify-between  max-sm:py-10 max-sm:gap-4 w-full items-center px-8"
    >
      <Link
        href="/"
        className="text-[#5865f2] text-center uppercase font-bold 
        text-2xl tracking-tighter text-black lg:text-3xl"
        target=""
      >
        <span>Pedro Felippe</span>
      </Link>

      {/* <div className="flex gap-4 md:gap-8 text-white">
        <Link href="/" className="text-gray-300 hover:text-white" target="">
          <span>Home</span>
        </Link>

        <Link
          className="text-gray-300 hover:text-white"
          href="#skills"
          target=""
        >
          <span>Skills</span>
        </Link>

        <Link
          className="text-gray-300 hover:text-white"
          href="#projects"
          target=""
        >
          <span>Projetos</span>
        </Link>

        <Link
          className="text-gray-300 hover:text-white"
          href="/#contact"
          target=""
        >
          <span> Contato </span>
        </Link>
      </div> */}

      <div className="flex gap-8  justify-center">
        <AnimatedBtn className=" " href="https://github.com/pefelippe">
          <FaGithub className="h-8 w-8 text-white hover:text-[#5865f2]" />
        </AnimatedBtn>

        <AnimatedBtn
          className=""
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className="h-8 w-8 text-white hover:text-[#5865f2] " />
        </AnimatedBtn>

        <AnimatedBtn className="" href="https://resume.io/r/m2cn8pnqu">
          <FaFilePdf className="h-8 w-8 text-white hover:text-[#5865f2]" />
        </AnimatedBtn>
      </div>
    </motion.div>
  );
}

export default Header;

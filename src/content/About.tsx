import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "./../components/motion/AnimatedBtn";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" h-full w-full max-w-7xl  text-xl text-[#fff] mx-auto  snap-center"
    >
      <div
        className=" flex flex-col w-full md:flex-row 
        items-center bg-[#09090b]  border-2 border-[#121212]  rounded-2xl  shadow-md gap-12 p-4"
      >
        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-md w-full md:max-w-[400px] max-md:h-[250px] transition-all shadow-md object-cover border-1 border-[#121212]"
        />

        <motion.span className=" flex flex-col w-fit justify-center  xl:justify-start text-center  xl:text-left text-[1rem]  md:text-[1.2rem]  text-gray-200  gap-8 ">
          <ContentTitle title="Quem sou" />
          <p>
            Sou um{" "}
            <span className="text-[#5865f2]  font-semibold">Web Developer</span>{" "}
            com mais de três anos de experiência em construir soluções
            inovadoras na web. Possuo profundo conhecimento em tecnologias como{" "}
            <span className=" font-semibold underline decoration-[#5865f2]">
              React, Next, Node, Typescript e AWS
            </span>
            . <br />
            <br />
            Atualmente finalizando meu diploma em{" "}
            <span className="font-semibold ">Ciência da Computação</span> na
            UFC. Além disso, trabalho como Web Developer no{" "}
            <a
              href="https://www.atlantico.com.br/"
              rel="noreferrer"
              target="_blank"
              className="text-[#5865f2] font-semibold underline"
            >
              Instituto Atlântico
            </a>
            .
          </p>
          <button className="w-full border-2 p-4 rounded-xl font-semibold  border-[#5865f2] text-[#5865f2] ">
            Currículo
          </button>
        </motion.span>
      </div>
    </motion.div>
  );
}

export default About;

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import ContentTitle from "./ContentTitle";

type Props = {};

function CallToContact({}: Props) {
  return (
    <div
      className="flex max-md:flex-col justify-between w-full max-w-7xl text-white mx-auto 
    text-2xl  pb-10 md:py-32"
    >
      <div className="flex flex-col justify-center gap-6 max-md:items-center">
        <ContentTitle title="Entre em contato" />
        <p className="text-lg text-gray-300 max-md:text-center">
          Não perca tempo. Entre em contato comigo e vamos gerar valor juntos.
        </p>

        <div className="flex justify-start gap-4 ">
          <Link
            className=" flex w-fit hover:underline  gap-2 items-center text-xl font-semibold
        text-center rounded-full bg-[#fff] text-[#000] hover:bg-[#5865f2] hover:text-[#fff] transition-all border-[1px] border-[#5865f2]"
            href="/contact"
          >
            <motion.span className="flex gap-2 items-center justify-center px-6 rounded-md py-4 font-bold">
              <p>Entre em contato</p>
            </motion.span>
          </Link>

          <Link
            className=" flex w-fit gap-2 items-center text-xl font-semibold text-[#5865f2] hover:underline
         text-center rounded-full transition-all "
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <p className="flex gap-1 justify-center items-center font-italic ">
              Linkedin
            </p>
            <FaArrowRight className=" h-5 w-5  -rotate-45 " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallToContact;

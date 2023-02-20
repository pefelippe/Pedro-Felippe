import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" top-0 right-0 left-0 h-fit flex z-40  mx-auto max-w-7xl text-[20px] text-[#EFEFEF]
       font-semibold justify-between w-full items-center  p-8"
    >
      <Link className="headerContent" href="/">
        <p className="text-3xl">Pedro Felippe </p>
      </Link>

      <div className="flex gap-4 md:gap-8">
        <AnimatedBtn
          href="https://resume.io/r/m2cn8pnqu"
          className=" items-center justify-center flex
          w-fit text-md md:text-xl mx auto  font-semibold text-[#fff]  hover:underline"
        >
          <p>Currículo</p>
        </AnimatedBtn>
        <AnimatedBtn
          href="/Contact"
          target=""
          className=" items-center justify-center flex gap-2 p-3 px-6
        w-fit text-md md:text-xl mx auto rounded-xl font-semibold text-[#fff]
        transition-all  bg-[#5865f2] hover:bg-[#5865f2]/80 hover:underline"
        >
          <p>Contato</p>
        </AnimatedBtn>
      </div>
    </motion.div>
  );
}

export default Header;

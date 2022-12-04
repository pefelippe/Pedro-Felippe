import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/cabeca.png";
import Links from "../atoms/Links";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 1.75 }}
      className="flex fixed justify-around p-2 w-screen z-30 bg-[#1f1f1ffa] "
    >
      <Link href="#hero">
        <Image
          src={Logo}
          alt="pefelippe avatar"
          className="object-fit relative rounded-full h-[60px] w-[60px]"
        />
      </Link>

      <nav className="flex justify-evenly items-center max-sm:hidden">
        <Links />
      </nav>
    </motion.header>
  );
}

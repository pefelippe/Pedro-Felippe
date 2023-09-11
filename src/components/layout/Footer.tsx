import { motion } from "framer-motion";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="py-15 bg-[#000] text-gray-100 gap-6 justify-center items-center font-thin text-sm md:text-md  mx-auto   flex px-8 p-10  w-screen flex-col">
      <p className="flex text-xl">Pedro Felippe © {year}</p>
    </motion.footer>
  );
}

export default Footer;

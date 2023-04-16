import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { navLinks } from "../../constants";
import SocialLinks from "../SocialLinks";
import HamburgerMenu from "./../HamburgerMenu";

const Navbar = () => {
  return (
    <motion.nav className="font-semibold   text-white max-w-7xl h-[10vh] bg-[#181818] shadow px-8 rounded-b-2xl mx-auto flex items-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full  flex justify-between items-center "
      >
        <Link
          href="/"
          className="text-[1.6rem] xl:text-[1.8rem] font-semibold min-w-fit hover:text-gray-300 transition-all hover:underline "
        >
          Pedro Felippe
        </Link>

        <div className="max-md:hidden list-none text-gray-300 text-xl  flex items-center gap-8">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.id}
                // className={` py-3  ${
                //   active === navLink.title
                //     ? "bg-blue hover:text-white rounded-full"
                //     : " text-secondary hover:text-blue"
                // }`}
                // onClick={() => {
                //   setToggle(!toggle);
                //   setActive(navLink.title);
                // }}
              >
                <Link
                  className="py-3 rounded-full hover:underline cursor-pointer"
                  href={`${navLink.id}`}
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="max-md:hidden">
          <SocialLinks />
        </div>

        <HamburgerMenu />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

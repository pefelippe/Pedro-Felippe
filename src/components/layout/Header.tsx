import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../animated/AnimatedBtn";
import { ModeToggle } from "../ui/mode-toggle";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

export const Logo = () => {
  return (
    <button className=" flex text-xl  transition-all w-fit  tracking-tight font-bold hover:text-blue">
      pedrofelippe.
    </button>
  );
};

const Header = () => {
  return (
    <motion.header className="fixed text-[#101010]  bg-white flex  h-20  w-full  z-50 px-6">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex w-full mx-auto items-center justify-between  max-w-screen-2xl"
      >
        <Link href="/">
          <Logo />
        </Link>

        <Link href="/contact">
          <Button
            variant={"default"}
            className="p-5  text-md rounded-full bg-gray-900 text-white"
          >
            Contact-me
          </Button>
        </Link>
      </motion.nav>
    </motion.header>
  );
};

export default Header;

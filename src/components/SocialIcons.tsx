import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

export default function SocialIcons({}: Props) {
  return (
    <nav className="flex justify-center items-center gap-10 ">
      <a
        href="#"
        className="border-2 border-[#121212] hover:border-[#fff] rounded-lg p-2"
      >
        <FaGithub className="socialMediaIcon" />
      </a>
      <a
        href="#"
        className="border-2 border-[#121212] hover:border-[#fff] rounded-lg p-2"
      >
        <FaLinkedinIn className="socialMediaIcon" />
      </a>
    </nav>
  );
}

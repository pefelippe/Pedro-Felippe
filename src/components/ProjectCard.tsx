import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaCode, FaGithub } from "react-icons/fa";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
  repo: string;
  title: string;
  stack: string[];
};

function ExperienceCard({
  description,
  link,
  imgUrl,
  repo,
  title,
  stack,
}: IProjectCard) {
  return (
    <motion.article
      className=" mx-auto w-fit flex flex-col lg:flex-row h-fit 
     text-white shadow-xl rounded-xl justify-between max-lg:gap-8 "
    >
      <motion.img
        src={imgUrl}
        alt="card image"
        className="object-cover min-h-[300px] w-full max-lg:max-w-[600px] lg:w-[600px] xl:h-[450px] xl:w-[700px] rounded-md mx-auto border-2 border-[#242424]"
      />

      <div className=" flex flex-col justify-center  mx-auto max-w-xl gap-8 lg:px-8 ">
        <p className="font-bold text-4xl ">{title}</p>
        <div className=" grid grid-cols-4 gap-4 text-center">
          {stack?.map((item) => {
            return (
              <span
                className="min-w-fit text-gray-300 py-2 px-2 text-md rounded-md border-2 border-[#242424] bg-[#202020]"
                key={item}
              >
                {item}
              </span>
            );
          })}
        </div>

        <p className="text-xl ">{description}</p>

        <div className="gap-4 w-full justify-center flex text-lg font-semibold tracking-[1px]">
          <a
            href={repo}
            className="flex gap-4 w-full py-3 border-2 items-center justify-center hover:underline border-[#5865f2] hover:bg-[#5865f2]/30 transition-all rounded-md"
          >
            Código
          </a>
          <a
            href={link}
            className="flex w-full py-4 items-center justify-center hover:underline  bg-[#5865f2] hover:bg-[#5865f2]/80 transition-all rounded-md"
          >
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;

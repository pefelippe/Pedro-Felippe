import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowBottomLeftIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Skills } from "./Skills";
import { Button } from "./ui/button";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
  repo: string;
  title: string;
  stack: string[];
  id: number;
};

function ProjectCard({
  description,
  link,
  imgUrl,
  repo,
  title,
  stack,
  id,
}: IProjectCard) {
  const isEvenId = id % 2 === 0;

  const initialX = isEvenId ? 50 : -50;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col h-full overflow-hidden items-start text-start justify-start gap-3 relative bg-gray-100/30  rounded "
    >
      <Link
        href={link}
        target="_blank"
        className=" overflow-hidden border-2 border-[#101010] hover:border-blue
        w-full rounded-3xl h-full "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover w-full h-full  min-h-[300px] "
        />
      </Link>

      <div className="flex flex-col gap-6 justify-start items-start p-8 text-md">
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-medium">{title}</p>
          <Skills technologies={stack} />
          <p className="text-xl font-normal ">{description}</p>
        </div>
        {/* 
        <div
          className="rounded flex gap-2 justify-center items-center w-fit
         hover:text-blue font-semibold text-xl tracking-tight"
        >
          <button>View project</button> <ArrowRight className="h-4 w-4" />
        </div> */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;

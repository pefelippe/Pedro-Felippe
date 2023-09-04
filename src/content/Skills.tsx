import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { technologies } from "../constants";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className=" text-xl w-full  mx-auto font-thin max-w-sm
      flex flex-col justify-center  items-start  "
    >
      <div className="grid w-full grid-cols-6 ">
        {technologies.map((tech) => {
          return (
            <div
              key={tech.name}
              className="text-sm gap-1 flex justify-center items-center  text-black rounded-md flex-col "
            >
              <Image width={35} height={35} src={tech.imgUrl} alt={tech.name} />
              {/* <span className="font-semibold">{tech.name}</span> */}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;

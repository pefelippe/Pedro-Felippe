import { motion } from "framer-motion";
import Image from "next/image";

import { technologies } from "../constants";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className=" text-xl  font-thin mx-auto
      flex flex-col  items-center w-full py-1 "
    >
      <div className="grid w-full grid-cols-8 gap-3 md:gap-10  ">
        {technologies.map((tech) => {
          return (
            <div key={tech.name} className="flex flex-col items-center gap-2 ">
              <Image width={50} height={50} src={tech.imgUrl} alt={tech.name} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;

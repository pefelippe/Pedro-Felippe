/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div className="flex flex-col w-full items-center max-w-5xl  ">
      <div className="flex max-md:flex-col w-full md:items-center gap-6 md:gap-10  xl:gap-20 justify-center">
        <motion.img
          src="/assets/avatar-pdr.png"
          alt="me"
          className="h-28 w-28 lg:h-64 lg:w-64 rounded-full "
        />
        <div className="flex flex-col text-start items-center text-white  rounded-3xl  w-full  gap-8 max-w-4xl  ">
          <p className="w-full text-2xl md:text-4xl  font-medium  ">
            I am Pedro Felippe. My passion lies in creating simple yet visually
            appealing UIs.
          </p>
          <p className="w-full text-xl font-light  ">
            My professional journey has revolved around crafting digital
            products that encompass web applications, PWAs, websites, e-commerce
            platforms, and mobile apps.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutContent;

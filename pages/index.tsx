import { motion } from "framer-motion";

import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className="w-full flex flex-col relative dark:bg-gray-900 dark:text-white py-32">
      <section className="section py-24">
        <Hero />
      </section>
      <section className="section ">
        <ProjectContent />
      </section>
    </motion.div>
  );
}

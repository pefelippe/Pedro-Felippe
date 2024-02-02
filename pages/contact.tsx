/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      id="contact-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col mx-auto  max-lg:max-w-2xl items-center text-center justify-center gap-6 max-w-3xl max-xl:px-6 "
    >
      <div className="flex flex-col gap-4">
        <h3 className="section-subtitle text-6xl">
          Get in <span className="text-blue">Contact</span>
        </h3>

        <p className="text-xl">
          Have something in mind? Questions, ideas, or just want to say hi? I'm
          all ears.
        </p>
      </div>

      <MessageForm />
    </motion.div>
  );
}

export default ContactContent;

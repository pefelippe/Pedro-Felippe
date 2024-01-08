/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import MessageForm from "../components/MessageForm";

function ContactContent() {
  return (
    <motion.div
      id="contact-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mx-auto justify-center items-start  relative w-full h-full min-h-[70vh]  gap-6"
    >
      <h1 className="text-5xl  font-bold tracking-tighter">
        Lets build something together.
      </h1>
      <h3 className="w-fit text-[20px]  ">
        Drop me a message and let's{" "}
        <span className="underline underline-offset-4 decoration-blue">
          make things happen!
        </span>
      </h3>
      <div className="w-full flex  items-center justify-center ">
        <MessageForm />
      </div>
    </motion.div>
  );
}

export default ContactContent;

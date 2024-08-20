import { motion } from "framer-motion";
import MessageForm from "../src/components/MessageForm";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mb-6"
      >
        <h1 className="text-5xl font-bold mb-4 text-white  ">Get in touch</h1>
        <p className="text-xl text-gray-400">
          I don't bite. Let's chat about your next big idea.
        </p>
      </motion.div>
      <MessageForm />
    </motion.div>
  );
}

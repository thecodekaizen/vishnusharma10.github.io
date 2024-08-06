// pages/index.js
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Vishnu Sharma</h1>
        <p className="text-lg">I'm a Software Engineer and Innovator.</p>
        <div className="mt-8">
          <a
            href="https://github.com/yourgithubusername"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://twitter.com/yourtwitterusername"
            className="text-blue-500 hover:underline ml-2"
          >
            Twitter
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/yourlinkedinusername"
            className="text-blue-500 hover:underline ml-2"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}

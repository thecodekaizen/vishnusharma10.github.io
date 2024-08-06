// pages/projects.js
import { motion } from "framer-motion";

const projects = [
  {
    name: "Project One",
    description: "Description for project one.",
    link: "https://github.com/yourgithubusername/project-one",
  },
  {
    name: "Project Two",
    description: "Description for project two.",
    link: "https://github.com/yourgithubusername/project-two",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              <p className="text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

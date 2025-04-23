// src/sections/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-r from-indigo-600 via-blue-500 to-green-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

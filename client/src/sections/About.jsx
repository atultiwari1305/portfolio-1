// src/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-r from-purple-500 to-pink-600 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4 text-white">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-100">
          I'm a passionate web developer with a strong background in full-stack development. I enjoy
          working with the latest web technologies to create dynamic and user-friendly applications.
        </p>
      </div>
    </motion.section>
  );
};

export default About;

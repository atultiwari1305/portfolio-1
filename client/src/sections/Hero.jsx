// src/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="relative h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 text-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-xl">I am a Full-Stack Web Developer</p>
        <motion.a
          href="#projects"
          className="inline-block px-6 py-2 bg-blue-700 text-white rounded-full text-lg mt-6 hover:bg-blue-600 transition"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          See My Work
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;

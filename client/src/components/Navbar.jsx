// src/components/Navbar.jsx
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold cursor-pointer">MyPortfolio</h1>
        <ul className="flex gap-8 text-lg font-medium">
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a href="#hero" className="hover:text-blue-200 transition">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a href="#about" className="hover:text-blue-200 transition">About</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a href="#projects" className="hover:text-blue-200 transition">Projects</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a href="#skills" className="hover:text-blue-200 transition">Skills</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a href="#education" className="hover:text-blue-200 transition">Education</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a href="#certifications" className="hover:text-blue-200 transition">Certifications</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

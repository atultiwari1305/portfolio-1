// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white">
      <p className="text-lg font-medium">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/yourprofile" className="hover:text-blue-200 transition">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="hover:text-blue-200 transition">
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com" className="hover:text-blue-200 transition">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;

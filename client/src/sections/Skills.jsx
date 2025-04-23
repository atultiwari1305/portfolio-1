import React from "react";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
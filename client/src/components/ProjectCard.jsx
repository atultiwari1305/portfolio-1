import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
    </div>
  );
};

export default ProjectCard;
import React from "react";
import certifications from "../data/certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index} className="text-lg text-gray-700">{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
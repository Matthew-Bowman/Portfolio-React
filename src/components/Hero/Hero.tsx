import React from "react";
import { EXTERNAL_LINKS } from "../../data/routes";

const Hero: React.FC = () => {
  return (
    <header className="py-20 mb-16 bg-gray-900 text-gray-100">
      <div className="p-20 mb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Matthew Bowman</h1>
          <p className="text-xl mb-8">
            Structured Systems Analyst & Full Stack Developer
          </p>
          <a
            href={EXTERNAL_LINKS.GitHub.path}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;

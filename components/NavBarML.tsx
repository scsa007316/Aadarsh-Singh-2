import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isProjectsExpanded, setProjectsExpanded] = useState(false);

  const handleProjectsClick = () => {
    setProjectsExpanded(!isProjectsExpanded);
  };

  return (
    <nav
      style={{ backgroundColor: 'rgba(30, 30, 30, 1)', padding: '1rem', zIndex: 2 }}
      className="flex justify-between items-center"
    >
      <a className="text-3xl font-bold text-white hover:underline" href="https://aadarshsingh0.github.io/">
        Aadarsh Singh
      </a>

      <div className="space-x-10 flex items-center">

      <a className="text-white hover:underline" href="/ML/Physics">
          Theoretical Physics
        </a>
      <button
       className={`text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-black ${
        isProjectsExpanded ? 'bg-black underline' : 'bg-black hover:bg-black'
        }`}

          onClick={handleProjectsClick}
        >
          Coding
        </button>
        
        <a className="text-white hover:underline" href="/">
          Animation
        </a>
        <a
          href="https://www.linkedin.com/in/aadarsh-singh-506454260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          {/* LinkedIn icon */}
          <img
            src="/Logos/Linkedin_logo.png" // Replace with the actual path to your LinkedIn icon/image
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
        
        <a
          href="https://github.com/scsa007316"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          {/* GitHub icon */}
          <img
            src="/Logos/github-mark-white.png" // Replace with the actual path to your GitHub icon/image
            alt="GitHub"
            className="w-6 h-6"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

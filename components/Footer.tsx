import React, { useState } from 'react';
import Link from 'next/link';

const Footer = ({ style })  => {
  const [isProjectsExpanded, setProjectsExpanded] = useState(false);

  const handleProjectsClick = () => {
    setProjectsExpanded(!isProjectsExpanded);
  };

  return (
    <div className="footer relative py-10 px-4 bg-gray-800 text-center" style={style}>
    <h1 className="text-5xl font-bold text-white">
      <p className="text-sm">&copy; 2024 Aadarsh Singh Portfolio. All rights reserved.</p>
      <p className="text-sm">Designed and developed by Aadarsh Singh using LLMs.</p>
      <p className="text-sm">This website is built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>, open-source projects released under the MIT License.</p>
      <p style={{ fontSize: '0.6rem' }}>Background images for Modals have been created using text-to-image AI such as SDXL turbo, Adobe Firefly, Krea, Runway etc. </p>
      <p style={{ fontSize: '0.6rem' }}>The Json files are created using Lottifiles converter and the pmg files are generated using Blender models from TurboSquid.</p>
    </h1>
  </div>
  );
};

export default Footer;

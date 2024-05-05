// pages/ModalPage.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import particlesConfig from './particlesConfig';
//import 'katex/dist/katex.min.css';
import NavBar from '../components/NavBar';
import VibratingComponent from './Text';
const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react'; // Import initParticlesEngine from '@tsparticles/react'

const Pagep1 = () => {
  console.log('Rendering Page component');

  const particlesLoaded = async () => { // Remove the parameter since Container is not used
    console.log('Particles loaded');
  };

  React.useEffect(() => {
    console.log('Effect triggered');
    initParticlesEngine(async (engine) => {
      //await loadSlim(engine);
    });
  }, []);

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
        <NavBar />
      </div>
      <div className="relative py-10 px-4 text-center" style={{ zIndex: 2, background: 'radial-gradient(circle, #778899,  #2c394b)' }}>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white to-gray-500">
          <span className="mr-4">ANIMATION</span>
          <span className="ml-4">PROJECTS</span>
        </h1>
      </div>
      <VibratingComponent />
      <div style={{ height: '1000px',  position: 'relative', top: '30%', left: '20%' }}>
        <DynamicParticles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesConfig} />
      </div>
    </div>
  );
};

export default Pagep1;

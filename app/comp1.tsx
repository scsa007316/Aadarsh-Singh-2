"use client"
// pages/ModalPage.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import particlesConfig from './particlesConfig';
//import 'katex/dist/katex.min.css';
import NavBar from '../components/NavBar';

const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });


import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// particlesConfig.js

const Pagep1 = () => {

console.log('Rendering Page component');

const particlesLoaded = async (container) => {
  console.log('Particles loaded:', container);
};

   
  React.useEffect(() => {
    console.log('Effect triggered');
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      
    });
  }, []);

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', width: '100%', zIndex: 2  }}>
      <NavBar />
    </div>
    <div className="relative py-10 px-4 text-center" style={{ zIndex: 2, background: 'radial-gradient(circle, #778899,  #2c394b)' }}>
  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white to-gray-500">
      <span className="mr-4">ANIMATION</span>
       <span className="ml-4">PROJECTS</span>
    </h1>

    </div>
    <div
    style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
    zIndex: 1,
    whiteSpace: 'nowrap', // Prevents line breaks
    padding: '25px', // Adding padding for better visual appeal
    borderRadius: '10px', // Adjust the value to control the roundness
    border: '2px solid white', // Adding a white border
    background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
  }}
>
    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    Animations created with open-source modeling software -{' '}
    <strong>
      <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
        <em style={{ color: '#FF8C00' }}>Blender</em>
      </a>
    </strong>
    <img
      src="/Logos/Blender_logo.png"  // Replace with the actual path to your Blender logo image
      alt="Blender Logo"
      style={{ width: '40px', marginLeft: '8px' }}  // Adjust the width and margin as needed
    />
  </h1>
  <p style={{ marginTop: '10px' }}>Various tutorials from the world wide web were referenced during the creation process.</p>
</div>
  <div style={{height: '1000px',width:'1000px',
    position: 'relative',
    top: '30%',
    left: '20%'}}>
      
  <DynamicParticles id="tsparticles"  particlesLoaded={particlesLoaded} options={particlesConfig} />;
    </div>    
  </div>
  );
  
};

export default Pagep1;

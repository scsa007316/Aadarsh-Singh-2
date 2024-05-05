"use client"
// pages/ModalPage.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import particlesConfig from './particlesConfig';
//import 'katex/dist/katex.min.css';
import NavBar from '/components/NavBarPhy';
import VibratingComponent from './vibrate';
import Lotcomp2 from './lotcomp2';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// particlesConfig.js

const Pagep1 = () => {
  

  console.log('Rendering Page component');
  const particlesLoaded = async () => { // Remove the parameter since Container is not used
    console.log('Particles loaded');
  };
   
  React.useEffect(() => {
    console.log('Effect triggered');
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      
    });
  }, []);

  return (

    <div style={{ position: 'relative', height: '100vh' }}>
           <div style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
         <NavBar />
       </div>
   
       <div style={{ position: 'relative', zIndex: 0 }}>
         <DynamicParticles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesConfig} />
       </div>
   
   
      <div className="relative py-10 px-4 text-center" style={{ zIndex: 2, background: 'radial-gradient(circle, gray,  #2c394b)' }}>
     <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white to-gray-500">
       <span className="mr-4">THEORETICAL</span>
       <span className="ml-4 mr-4">PHYSICS</span>
       <span className="ml-4">PROJECTS</span>
     </h1>
   </div>


<VibratingComponent text="Hello, world!" />

<Lotcomp2 />
 <style>
       {`
         /* For WebKit (Chrome, Safari, etc.) */
         ::-webkit-scrollbar {
           width: 10px;
           border-radius: 5px; /* Roundness of the scrollbar track */
         }
         
         ::-webkit-scrollbar-track {
           background: rgba(255, 255, 255, 0); /* Background color of the track */
         }
         
         ::-webkit-scrollbar-thumb {
           background: #D4B996; /* Color of the thumb */
           border-radius: 5px; /* Roundness of the thumb */
         }

         /* For Firefox */
         scrollbar-width: thin;
         scrollbar-color: #D4B996 rgba(255, 255, 255, 1); /* Color of the thumb and track */
       `}
     </style>



   </div>

  );
  
};

export default Pagep1;

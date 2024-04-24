// page.tsx
"use client"
// page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link'; 
import BackToTopButton from '/components/ToTop';
import Footer from '/components/Footer';

import { tsParticles } from '@tsparticles/engine';
import { loadCurvesPath } from '@tsparticles/path-curves';
import { loadPolygonPath } from "@tsparticles/path-polygon";
import Pagep1 from './comp1'
import Pagep2 from '/app/ML/project';
import Lotcomp2 from './lotcomp2';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
// particlesConfig.js

const Page2 = () => {
  console.log('Rendering Page component');

  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
  };
   

  

  React.useEffect(() => {
    console.log('Effect triggered');
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonPath(tsParticles);
      await loadCurvesPath(tsParticles);
    });
  }, []);

return (
  <>
   <Pagep1 />

   <Lotcomp2 />
   <Pagep2 />

   <BackToTopButton />
   <div style={{ position: 'absolute', width: '100%', zIndex: 2 }}>
   <Footer />
    </div>

     <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: '999',
        animation: 'moveText 5s linear infinite',
      }}
    >
      Click for particle emission
    </div>





   <style>
          {`
          @keyframes moveText {
            0% { transform: translateX(0); }
            50% { transform: translateX(50px); }
            100% { transform: translateX(0); }
          }
            /* For WebKit (Chrome, Safari, etc.) */
            ::-webkit-scrollbar {
              width: 10px;
              border-radius: 5px; /* Roundness of the scrollbar track */
            }
            
            ::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0); /* Background color of the track */
            }
            
            ::-webkit-scrollbar-thumb {
              background: #000000; /* Color of the thumb */
              border-radius: 5px; /* Roundness of the thumb */
            }

            /* For Firefox */
            scrollbar-width: thin;
            scrollbar-color: #1E1E1E rgba(255, 255, 255, 1); /* Color of the thumb and track */
          `}
        </style>


  </>
);

};

export default Page2;

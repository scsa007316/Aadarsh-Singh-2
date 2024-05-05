// page.tsx
"use client"
// page.tsx
import React, { CSSProperties , useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link'; 
import BackToTopButton from '/components/ToTop';
import Footer from '/components/Footer';
import MobileNavBar from '/components/NavBarML-mobile';
import MLcomp from '/components/textml'
import { tsParticles } from '@tsparticles/engine';
import { loadCurvesPath } from '@tsparticles/path-curves';
import { loadPolygonPath } from "@tsparticles/path-polygon";
import Pagep1 from './comp1'
import Pagep2 from '/app/ML/project';
import Pagep2mob from '/app/ML/project-mobile';
import Lotcomp2 from './lotcomp2';
import Footermob from '/components/Footer-mob';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
// particlesConfig.js

const Page2 = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    handleResize(); // Set initial width and height
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);
  
  console.log('Rendering Page component');

  const particlesLoaded = async () => { // Remove the parameter since Container is not used
    console.log('Particles loaded');
  };
   
  const footerStyle: CSSProperties = {
    position: 'absolute',
    top: '500px',
    width: '100%',
    zIndex: 2,
  };
  
  const footerStylemob: CSSProperties = {
    position: 'absolute',
    top: '200px',
    width: '100%',
    zIndex: 2,
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
   {width > height ? (
        <Pagep1 />
      ) : (
        <MobileNavBar someProp="Hello, prop value!" />
      )}

{width > height ? (
  
  <Lotcomp2 />
) : null}

{width < height ? (
  
<MLcomp />


) : null}

{width > height ? (
        <Pagep2 />
      ) : (
        <div style={{ marginTop: '400px' }}> {/* Adjust the marginTop value */}
        <Pagep2mob />
      </div>
      )}

   <BackToTopButton />
 
 
   <div style={{ position: 'absolute', width: '100%', zIndex: 2 }}>
   {width > height ? (
        
        <Footer style={footerStyle} />
        ) : (
          
        <Footermob style={footerStylemob} />
        )}
    </div>

    {width > height ? (
  
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
  
  
  ) : null}

    





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

// page.tsx
"use client"
// page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import BackToTopButton from '../components/ToTop';
import Footer from '../components/Footer';
import Pagep1 from './comp1'
import BackgroundWithStars from './BackgroundWithStars';
import Lotcomp2 from './lotcomp2';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { loadPolygonPath } from '@tsparticles/path-polygon';
import { loadCurvesPath } from '@tsparticles/path-curves';

const Page = () => {
  console.log('Rendering Page component');

 
  const footerStyle = {
    position: 'absolute',
    top: '3120px',
    width: '100%',
    zIndex: 2,
  };
  const videos = [
    { source: "/Videos/Black_Hole_Decay.mp4", title: "Black Hole Hawking Evaporation" },
    { source: "/Videos/Black_Hole.mp4", title: "Intergalactic Black Hole" },
    { source: "/Videos/Gravitational_Waves.mp4", title: "Gravitational Waves from two Black Holes" },
  ];


  const videos2 = [
    { source: "/Videos/SM.mp4", title: "Black Hole Hawking Evaporation" },
    { source: "/Videos/Mandelbulb.mp4", title: "Intergalactic Black Hole" },
    { source: "/Videos/Galaxy.mp4", title: "Gravitational Waves from two Black Holes" },
  ];

  const videos3 = [
    { source: "/Videos/Black.mkv", title: "Black Hole Hawking Evaporation" },
    { source: "/Videos/Mandelbulb.mp4", title: "Intergalactic Black Hole" },
    { source: "/Videos/Galaxy.mp4", title: "Gravitational Waves from two Black Holes" },
  ];

  React.useEffect(() => {
    console.log('Effect triggered');
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonPath(engine);
      await loadCurvesPath(engine);
    });
  }, []);

return (
  <>
 <Pagep1 />

 <Lotcomp2 />
    <div>
    <BackgroundWithStars videos={videos} />
    <BackgroundWithStars videos={videos2} />
    </div>
  
      {/* Add the BackToTopButton component */}
      <BackToTopButton />
    <Footer style={footerStyle} />
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
              background: #B0C4DE; /* Color of the thumb */
              border-radius: 5px; /* Roundness of the thumb */
            }

            /* For Firefox */
            scrollbar-width: thin;
            scrollbar-color: #B0C4DE rgba(255, 255, 255, 1); /* Color of the thumb and track */
          `}
        </style>
  </>
);

};

export default Page;

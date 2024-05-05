// page.tsx
"use client"
// page.tsx
import React, { CSSProperties , useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import BackToTopButton from '../components/ToTop';
import Footer from '../components/Footer';
import Pagep1 from './comp1'
import BackgroundWithStars from './BackgroundWithStars';
import Lotcomp2 from './lotcomp2';
import MobileNavBar from '../components/NavBar-mobile';
import VerticalVideoList from '/components/VideoComponent-mobile';
import Footermob from '/components/Footer-mob';

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { loadPolygonPath } from '@tsparticles/path-polygon';
import { loadCurvesPath } from '@tsparticles/path-curves';

const Page = () => {
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

  // Define the type for the style object
  const footerStyle: CSSProperties = {
    position: 'absolute',
    top: '3120px',
    width: '100%',
    zIndex: 2,
  };

  const footerStylemob: CSSProperties = {
    position: 'absolute',
    top: '2500px',
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
    {width > height ? (
        <Pagep1 />
      ) : (
        <MobileNavBar someProp="Hello, prop value!" />

      )}

{width > height ? (
  
  <Lotcomp2 />
) : null}



{width > height ? (
        <div>
        <BackgroundWithStars videos={videos} />
        <BackgroundWithStars videos={videos2} />
      </div>
      ) : (
        <div>
        <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          zIndex:'2',
        }}
      >
        Animations are created with open software -{' '}
        <strong>
          <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
            <em style={{ color: '#FF8C00' }}>Blender</em>
          </a>
        </strong>
        <img
          src="/Logos/Blender_logo.png"
          alt="Blender Logo"
          style={{ width: '20px', marginLeft: '4px' }}
        />
      </h1>
        <VerticalVideoList videos={videos} videoWidth="560" videoHeight="315" /> {/* Specify custom dimensions */}
        <VerticalVideoList videos={videos2} videoWidth="560" videoHeight="315" /> {/* Specify custom dimensions */}
        {/* <VerticalVideoList videos={videos3} videoWidth="560" videoHeight="315" /> Specify custom dimensions */}
      </div>
      )}


      {/* {width > height ? (
        <PageForWidthGreaterThanHeight />
      ) : (
        <PageForHeightGreaterThanWidth />
      )} */}

      {/* Add the BackToTopButton component */}
      <BackToTopButton />

      {width > height ? (
        
      <Footer style={footerStyle} />
      ) : (
        
      <Footermob style={footerStylemob} />
      )}

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

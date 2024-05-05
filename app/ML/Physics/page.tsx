"use client"
// pages/ModalPage.tsx
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';
import Pagep1 from './comp1'
import MobileNavBar from '/components/NavBarphy-mobile';
import Phycomp from '/components/textphy';

import { loadCurvesPath } from '@tsparticles/path-curves';
import { loadPolygonPath } from "@tsparticles/path-polygon";
import { loadLightInteraction } from "@tsparticles/interaction-light";
import { loadRotateUpdater } from "@tsparticles/updater-rotate";
import { loadLifeUpdater } from "@tsparticles/updater-life";
import Modalphy from './Modal';
import Modalphymob from './Modal-mobile';

import BackToTopButton from '/components/ToTop';
import Footer from '/components/Footer';
import Footermob from '/components/Footer-mob';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// particlesConfig.js

const Page2 = () => {
  const footerStyle: CSSProperties = {
    position: 'absolute',
    top: '3300px',
    width: '100%',
    zIndex: 2,
  };

  const footerStylemob: CSSProperties = {
    position: 'absolute',
    top: '3000px',
    width: '100%',
    zIndex: 2,
  };


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
   
  React.useEffect(() => {
    console.log('Effect triggered');
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonPath(engine);
      await loadCurvesPath(engine);
      await loadLightInteraction(engine);
      await loadRotateUpdater(engine);
      await loadLifeUpdater(engine);
      
    });
  }, []);

  return (
    <>
    {width > height ? (
        <Pagep1 />
      ) : (
        <MobileNavBar someProp="Hello, prop value!" />
      )}
      
{width < height ? (
  
  <Phycomp />
  
  
  ) : null}

{width > height ? (
        <Modalphy />
      ) : (
        <Modalphymob />
      )}
 


        {/* Add the BackToTopButton component */}
        <BackToTopButton />
        {width > height ? (
        
        <Footer style={footerStyle} />
        ) : (
          
        <Footermob style={footerStylemob} />
        )}
    </>
  );
  
};

export default Page2;

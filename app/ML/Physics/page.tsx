"use client"
// pages/ModalPage.tsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'; // Import the Modal component
import CustomModal from '/components/ModalContent'; // Update the path
import CustomModal2 from '/components/ModalContent2'; // Update the path
import CustomModal3 from '/components/ModalContent3'; // Update the path
import CustomModal4 from '/components/ModalContent4'; // Update the path
import CustomModal5 from '/components/ModalContent5'; // Update the path
import CustomModal6 from '/components/ModalContent6'; // Update the path
import CustomModal7 from '/components/ModalContent7'; // Update the path
import CustomModal8 from '/components/ModalContent8'; // Update the path
import dynamic from 'next/dynamic';
import VibratingComponent from './vibrate';
import TranslatingComponent from './translate';
import Link from 'next/link'; 
import particlesConfig from './particlesConfig';
import { tsParticles } from '@tsparticles/engine';
import { loadCurvesPath } from '@tsparticles/path-curves';
import { loadPolygonPath } from "@tsparticles/path-polygon";
import { loadLightInteraction } from "@tsparticles/interaction-light";
import { loadRotateUpdater } from "@tsparticles/updater-rotate";
import { loadLifeUpdater } from "@tsparticles/updater-life";

import { BlockMath, InlineMath } from 'react-katex';

import NavBar from '/components/NavBarPhy';
import BackToTopButton from '/components/ToTop';
import Footer from '/components/Footer';
import Lotcomp2 from './lotcomp2';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// particlesConfig.js

const Page2 = () => {
  const footerStyle = {
    position: 'absolute',
    top: '3400px',
    width: '100%',
    zIndex: 2,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  const [isModal6Open, setIsModal6Open] = useState(false);
  const [isModal7Open, setIsModal7Open] = useState(false);
  const [isModal8Open, setIsModal8Open] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  const openModal3 = () => {
    setIsModal3Open(true);
  };

  const closeModal3 = () => {
    setIsModal3Open(false);
  };

  const openModal4 = () => {
    setIsModal4Open(true);
  };

  const closeModal4 = () => {
    setIsModal4Open(false);
  };

  const openModal5 = () => {
    setIsModal5Open(true);
  };

  const closeModal5 = () => {
    setIsModal5Open(false);
  };

  const openModal6 = () => {
    setIsModal6Open(true);
  };

  const closeModal6 = () => {
    setIsModal6Open(false);
  };

  const openModal7 = () => {
    setIsModal7Open(true);
  };

  const closeModal7 = () => {
    setIsModal7Open(false);
  };

  const openModal8 = () => {
    setIsModal8Open(true);
  };

  const closeModal8 = () => {
    setIsModal8Open(false);
  };


  console.log('Rendering Page component');
  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
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


    <VibratingComponent />
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



  <div
  onClick={openModal}
  style={{
    position: 'absolute',
    top: '1900px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
    zIndex: 1,
    whiteSpace: 'nowrap',
    padding: '0px',
    borderRadius: '0px',
    border: '0px solid white',
    background: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    left: '15%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  }}
>
<TranslatingComponent lines={["1) Fields In Bondi-Sach SpaceTime Metric", "Description of the Project"]} />

</div>

      {/* Render your modal component */}
      <CustomModal isOpen={isModalOpen} closeModal={closeModal} />


      <div
        onClick={openModal2}
        style={{
          position: 'absolute',
          top: '1900px',
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.5',
          zIndex: 1,
          whiteSpace: 'nowrap',
          padding: '0px',
          borderRadius: '0px',
          border: '0px solid white',
          background: 'rgba(0, 0, 0, 0.7)',
          fontWeight: 'bold',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }}
      >
      <TranslatingComponent lines={["2) Standard Model and Neutrinos", "Description of the Project"]} />
    
      </div>

      {/* Use CustomModal2 */}
      <CustomModal2 isOpen={isModal2Open} closeModal={closeModal2} />

      <div
  onClick={openModal3}
  style={{
    position: 'absolute',
    top: '2300px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
    zIndex: 1,
    whiteSpace: 'nowrap',
    padding: '0px',
    borderRadius: '0px',
    border: '0px solid white',
    background: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    left: '15%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  }}
>

<TranslatingComponent lines={["3) BSM Clockwork Neutrinos", "Description of the Models"]} />

</div>
      
      <CustomModal3 isOpen={isModal3Open} closeModal={closeModal3} />



      <div
        onClick={openModal4}
        style={{
          position: 'absolute',
          top: '2300px',
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.5',
          zIndex: 1,
          whiteSpace: 'nowrap',
          padding: '0px',
          borderRadius: '0px',
          border: '0px solid white',
          background: 'rgba(0, 0, 0, 0.7)',
          fontWeight: 'bold',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }}
      >
        <TranslatingComponent lines={["4) BSM Precision-Prune Neutrinos", "Description of the Models"]} />

      </div>

      {/* Use CustomModal2 */}
      <CustomModal4 isOpen={isModal4Open} closeModal={closeModal4} />


      <div
  onClick={openModal5}
  style={{
    position: 'absolute',
    top: '2700px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
    zIndex: 1,
    whiteSpace: 'nowrap',
    padding: '0px',
    borderRadius: '0px',
    border: '0px solid white',
    background: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    left: '15%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  }}
>
<TranslatingComponent lines={["5) BSM Randomness Assisted Neutrinos", "Description of the Models"]} />
    
</div>
      
      <CustomModal5 isOpen={isModal5Open} closeModal={closeModal5} />



      <div
        onClick={openModal6}
       style={{
          position: 'absolute',
          top: '2700px',
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.5',
          zIndex: 1,
          whiteSpace: 'nowrap',
          padding: '0px',
          borderRadius: '0px',
          border: '0px solid white',
          background: 'rgba(0, 0, 0, 0.7)',
          fontWeight: 'bold',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }}
      >
     <TranslatingComponent lines={["6) Fractal BSM Models", "Description of the Models"]} />

      </div>

      {/* Use CustomModal2 */}
      <CustomModal6 isOpen={isModal6Open} closeModal={closeModal6} />



      <div
  onClick={openModal7}
  style={{
    position: 'absolute',
    top: '3100px',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
    zIndex: 1,
    whiteSpace: 'nowrap',
    padding: '0px',
    borderRadius: '0px',
    border: '0px solid white',
    background: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    left: '15%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  }}
>

<TranslatingComponent lines={["7) Quantum Information and Computation", "Description of the Project"]} />
    
</div>
      
      <CustomModal7 isOpen={isModal7Open} closeModal={closeModal7} />



      <div
        onClick={openModal8}
        style={{
          position: 'absolute',
          top: '3100px',
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.5',
          zIndex: 1,
          whiteSpace: 'nowrap',
          padding: '0px',
          borderRadius: '0px',
          border: '0px solid white',
          background: 'rgba(0, 0, 0, 0.7)',
          fontWeight: 'bold',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }}
      >
   <TranslatingComponent lines={["8) Rank and Nullity of Elementwise", "Description of the Project"]} />

      </div>

      {/* Use CustomModal2 */}
      <CustomModal8 isOpen={isModal8Open} closeModal={closeModal8} />



        {/* Add the BackToTopButton component */}
        <BackToTopButton />
        <Footer style={footerStyle} />
    </>
  );
  
};

export default Page2;

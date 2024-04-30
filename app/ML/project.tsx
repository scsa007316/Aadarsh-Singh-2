"use client"
// pages/ModalPage.tsx
import React, { useState } from 'react';
import YourComponent from '/components/QC';
import YourComponent2 from '/components/ML';
import YourComponent3 from '/components/Uproot';
import YourComponent4 from '/components/Pycuda';
import YourComponent5 from '/components/Mathematica';
import YourComponent6 from '/components/Pending';


const Pagep2 = () => {
  

  console.log('Rendering Page component');
  const particlesLoaded = async () => { // Remove the parameter since Container is not used
    console.log('Particles loaded');
  };
   

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
     
     <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)',position:'relative', height: '500px', overflow: 'auto' }}>
        <YourComponent />
      </div>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)',position:'relative', height: '500px', overflow: 'auto' }}>
        <YourComponent2 />
      </div>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)',position:'relative', height: '500px', overflow: 'auto' }}>
        <YourComponent3 />
      </div>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)',position:'relative', height: '500px', overflow: 'auto' }}>
        <YourComponent4 />
      </div>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)',position:'relative', height: '500px', overflow: 'auto' }}>
        <YourComponent5 />
      </div>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)',position:'relative', height: '500px', overflow: 'auto' }}>
        <YourComponent6 />
      </div>
  
 
     

  </div>
  );
  
};

export default Pagep2;

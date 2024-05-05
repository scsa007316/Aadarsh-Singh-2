import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import particlesConfig from '/app/ML/Physics/particlesConfig';
//import 'katex/dist/katex.min.css';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';


const Phycomp: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const adjustTextSize = () => {
      const newFontSize = Math.min(
        container.clientWidth / 40, // Adjust the divisor (15) to control the scaling factor
        container.clientHeight / 1.5 // Adjust the divisor (1.5) to control the scaling factor
      );
      setFontSize(newFontSize);
    };

    adjustTextSize(); // Adjust text size initially
    window.addEventListener('resize', adjustTextSize); // Adjust text size on window resize

    return () => {
      window.removeEventListener('resize', adjustTextSize); // Clean up event listener
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
      
    });
  }, []);

  // Ensure fontSize is defined and has a default value of 0
  const computedFontSize = fontSize !== undefined ? `${fontSize + 3}px` : 'inherit';

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          top: '300px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
          whiteSpace: 'nowrap',
          padding: '25px',
          borderRadius: '10px',
          border: '2px solid white',
          background: 'rgba(0, 0, 0, 0.7)',
          maxWidth: '95%',
          width: 'fit-content',
          fontSize: computedFontSize, // Use computedFontSize to handle potential undefined
        }}
      >
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Following are Theoretical Physics Projects.
        </h1>
      </div>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <DynamicParticles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesConfig} />
      </div>
    </div>
  );
};

export default Phycomp;

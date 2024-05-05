import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import particlesConfig from '/app/ML/particlesConfig';
//import 'katex/dist/katex.min.css';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const MLcomp: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const adjustTextSize = () => {
      const newFontSize = Math.min(
        container.clientWidth / 40,
        container.clientHeight / 1.5
      );
      setFontSize(newFontSize);
    };

    adjustTextSize();
    window.addEventListener('resize', adjustTextSize);

    return () => {
      window.removeEventListener('resize', adjustTextSize);
    };
  }, []);

  console.log('Rendering Page component');

  const particlesLoaded = async () => {
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
    <div style={{ position: 'relative', height: '90vh' }}>
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
          Following are Coding projects completed.
        </h1>
      </div>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <DynamicParticles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesConfig} />
      </div>
    </div>
  );
};

export default MLcomp;

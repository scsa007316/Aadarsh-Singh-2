import React, { useEffect, useRef, useState } from 'react';

const VibratingComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const adjustTextSize = () => {
      const newFontSize = Math.min(
        container.clientWidth / 1, // Adjust the divisor (40) to control the scaling factor
        20 // Adjust the divisor (1.5) to control the scaling factor
      );
      setFontSize(newFontSize);
    };

    adjustTextSize(); // Adjust text size initially
    window.addEventListener('resize', adjustTextSize); // Adjust text size on window resize

    return () => {
      window.removeEventListener('resize', adjustTextSize); // Clean up event listener
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: '50%',
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
      }}
    > 
    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    Animations created with open-source modeling software -{' '}
    <strong>
      <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
        <em style={{ color: '#FF8C00' }}>Blender</em>
      </a>
    </strong>
    <img
      src="/Logos/Blender_logo.png"  // Replace with the actual path to your Blender logo image
      alt="Blender Logo"
      style={{ width: '40px', marginLeft: '8px' }}  // Adjust the width and margin as needed
    />
  </h1>
  <p style={{ marginTop: '10px' }}>Various tutorials from the world wide web were referenced during the creation process.</p>

    </div>
  );
};

export default VibratingComponent;

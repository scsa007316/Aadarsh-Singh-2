import React, { useEffect, useRef, useState } from 'react';

const VibratingComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [newFontSize, setNewFontSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const adjustTextSize = () => {
      const fontSize = Math.min(
        container.clientWidth / 1, // Adjust the divisor (40) to control the scaling factor
        20 // Adjust the divisor (1.5) to control the scaling factor
      );
      setNewFontSize(fontSize);
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
      <p style={{ marginTop: '10px', fontSize: `${newFontSize ?? 0}px` }}>
        Following is the list of various coding projects done in several languages <br />
        such as python, Mathematica, C++ etc.
      </p>
    </div>
  );
};

export default VibratingComponent;

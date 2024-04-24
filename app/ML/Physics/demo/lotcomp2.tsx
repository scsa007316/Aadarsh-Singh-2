"use client"


import React, { useState, useEffect } from 'react';
import Lotcomp from './lotcomp';

const Lotcomp2: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2000 || scrollY < 100) {
        setIsTextVisible(false);
      } else {
        setIsTextVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div style={{ height: '1990px',width: '100%', padding: '2px' }}>
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', transition: 'opacity 0.5s ease-in-out', opacity: isTextVisible ? 1 : 0 }}>
        <div style={{ width: '100%', border: '1px solid black', padding: '2px' }}>
          <Lotcomp />
          {/* You can add more text here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Lotcomp2;



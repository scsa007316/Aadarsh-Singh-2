"use client"

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '/public/Lottie/Book.json';



const Lotcomp: React.FC = () => {
  const myRef = useRef<any>(null); // Use 'any' type for myRef to avoid type errors

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const startScroll = 0;  // Start of scroll range
      const endScroll = 1800;  // End of scroll range
      const maxScroll = endScroll - startScroll;  // Total scroll range
      const maxFrame = 180;  // Maximum frame value
      const scrollFactor = 0.5;  // Adjust this factor to control speed
      
      if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
        let frame = Math.floor(((scrollPosition - startScroll) / maxScroll) * maxFrame * scrollFactor);
        frame = frame > maxFrame ? maxFrame : frame;  // Limit frame value
        if (myRef.current) {
          myRef.current.goToAndStop(frame, true);
        }
      }
    };
    
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="App">
      <div style={{ 
  position: 'relative', 
  overflow: 'hidden',
  display: 'flex',  // Add this
  justifyContent: 'center',  // Add this
  alignItems: 'center'  // Add this
}}>
  <Lottie
    lottieRef={myRef}
    animationData={animationData}
    autoplay={false}
    style={{height:'100%', width: '1000px', position: 'sticky', top: '0' }}
  />
</div>

    </div>
    

  </>
  );
  
};

export default Lotcomp;




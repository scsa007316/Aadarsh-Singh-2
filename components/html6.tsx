"use client"
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '/public/Lottie/Monkey_lottie.json';

const MyHtmlComponentLottie2: React.FC = () => {
  const myRef = useRef<any>(null); // Use AnimationItem as the type

  useEffect(() => {
    if (myRef.current) {
      myRef.current.play(); // Start the animation
    }
  }, []);

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', height: '10vh' }}>
      <div>
        <Lottie
          lottieRef={myRef}
          animationData={animationData}
          autoplay={false} // Keep autoplay false to prevent double start
          loop={true} // Set loop to true for continuous looping
          style={{ width: '300px' }}
        />
      </div>
    </div>
  );
};

export default MyHtmlComponentLottie2;


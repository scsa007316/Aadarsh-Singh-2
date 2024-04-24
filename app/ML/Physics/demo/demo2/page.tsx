"use client"

import React from 'react';
import YourComponent from '/app/ML/Physics/demo/demo2/comp4.tsx';

const Page: React.FC = () => {
  return (
    <>
    <YourComponent />
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
              background: #bdc3c7; /* Color of the thumb */
              border-radius: 5px; /* Roundness of the thumb */
            }

            /* For Firefox */
            scrollbar-width: thin;
            scrollbar-color: #bdc3c7 rgba(255, 255, 255, 1); /* Color of the thumb and track */
          `}
        </style>
    </>
  );
};

export default Page;






import React from 'react';

interface VibratingComponentProps {
  text: string;
}

const VibratingComponent: React.FC<VibratingComponentProps> = ({ text }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        fontSize: '2rem',
        zIndex: 1,
        whiteSpace: 'nowrap',
        padding: '25px',
        borderRadius: '10px',
        border: '2px solid white',
        background: 'rgba(0, 0, 0, 0.7)',
        animation: 'vibrate 2s infinite alternate', // Vibration animation
      }}
    >
      <h1 className="text-xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-500">
       Following Academics Projects are done in the area of Theoretical Physics
      </h1>


    </div>
  );
};

export default VibratingComponent;

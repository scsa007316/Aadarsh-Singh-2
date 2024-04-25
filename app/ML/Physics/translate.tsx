import React from 'react';

interface TranslatingComponentProps {
  lines?: string[]; // Make lines prop optional
}

const TranslatingComponent: React.FC<TranslatingComponentProps> = ({ lines = [] }) => {
  // Generate random values for positioning and translation
  const randomTop = `${Math.random() * 100}%`; // Random top position
  const randomLeft = `${Math.random() * 100}%`; // Random left position
  const randomTranslateX = `${Math.random() * 50 - 10}%`; // Random translation (-10% to 10%)

  return (
    <div
      style={{
        position: 'absolute',
        top: randomTop,
        left: randomLeft,
        transform: `translateX(${randomTranslateX})`, // Random translation
        textAlign: 'center',
        color: 'white',
        zIndex: 1,
        whiteSpace: 'nowrap',
        padding: '25px',
        borderRadius: '10px',
        border: '2px solid white',
        background: 'rgba(0, 0, 0, 0.7)',
        animation: 'translateX 2s infinite alternate linear', // Bidirectional translation animation
      }}
    >
      {lines.map((line, index) => (
        <h1 key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: index === 0 ? '1.5rem' : '1rem' }}>
          {line}
        </h1>
      ))}
    </div>
  );
};

export default TranslatingComponent;

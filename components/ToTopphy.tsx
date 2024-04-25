import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 300; // Adjust this value based on when you want the button to appear

    setIsVisible(scrollY > scrollThreshold);
  };

  const scrollToTop = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        zIndex: 999,
        right: '1rem',
        bottom: '1rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'transparent', // Set your desired background color
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isVisible ? 1 : 0, // Hide the button initially, and make it visible on scroll
        transition: 'opacity 0.3s ease-in-out', // Add a smooth transition effect
      }}
    >
      <img
        src="/Logos/top_arrow.jpg" // Replace with the actual path to your image
        alt="Top"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
      />
    </button>
  );
};

export default BackToTopButton;

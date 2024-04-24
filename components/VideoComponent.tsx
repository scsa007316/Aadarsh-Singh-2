import React, { useState } from 'react';

interface VideoComponentProps {
  videoSource: string;
  title: string;
  titleStyle?: React.CSSProperties; // Add a ? to make it optional
  opacity?: number; // Add opacity property
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoSource, title, titleStyle = {}, opacity = 1 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        paddingBottom: '10%',
        overflow: 'hidden',
        transform: isHovered ? 'scale(1.10)' : 'scale(1)', // Enlarge on hover
        transition: 'transform 0.3s ease-in-out', // Add smooth transition
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'absolute', top: '0', left: '10%', width: '90%', height: '100%', borderRadius: '10px', overflow: 'hidden', zIndex: 1 }}>
        <video
          controls
          autoPlay
          muted
          loop // Add the loop attribute
          style={{
            width: '90%', // Set the width to 100%
            height: '60%', // Set the height to 100%
            objectFit: 'cover', // Maintain aspect ratio and cover the entire container
            borderRadius: '10px',
            zIndex: 1,
            opacity: opacity, // Set the opacity
          }}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={{ marginTop: '400px', zIndex: 2 }}>
        <h2 style={titleStyle}>{title}</h2>
      </div>
    </div>
  );
};

export default VideoComponent;

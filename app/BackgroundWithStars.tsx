import React from 'react';
import VideoComponent from '../components/VideoComponent'; // Import the VideoComponent

interface Video {
  source: string;
  title: string;
}

interface BackgroundWithStarsProps {
  videos: Video[];
}

const BackgroundWithStars: React.FC<BackgroundWithStarsProps> = ({ videos }) => {
  const generateRandomColor = () => {
    const random = Math.random();
    if (random < 0.2) return 'blueish'; // 20% blueish
    if (random < 0.3) return 'reddish'; // 10% reddish
    return 'white'; // Remaining white
  };

  const getShadowColor = (color: string) => {
    switch (color) {
      case 'blue':
      case 'blueish':
        return 'rgba(0, 0, 255, 0.5)'; // Blue shadow
      case 'red':
      case 'reddish':
        return 'rgba(255, 0, 0, 0.5)'; // Red shadow
      default:
        return 'rgba(255, 255, 255, 0.5)'; // White shadow
    }
  };

  return (
    <div style={{ position: 'relative', height: '600px', backgroundColor: 'black', padding: '100px', zIndex: 1, width: '100%' }}>
      {/* Stars */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {Array.from({ length: 80 }, (_, index) => {
          const color = generateRandomColor();
          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: '4px',
                height: '4px',
                backgroundColor: color,
                borderRadius: '50%',
                filter: 'blur(1.5px)', // Adjust blur radius as needed
                boxShadow: `0 0 1px 2px ${getShadowColor(color)}`, // Adjust shadow size and color dynamically
              }}
            />
          );
        })}
      </div>
      {/* Render the video components */}
      <div style={{ display: 'flex', gap: '1px', position: 'relative', zIndex: 2 }}>
        {videos.map((video, index) => (
          <VideoComponent key={index} videoSource={video.source} title={video.title} titleStyle={{ color: 'white', fontStyle: 'italic', fontWeight: 'bold' }} />
        ))}
      </div>
    </div>
  );
};

export default BackgroundWithStars;

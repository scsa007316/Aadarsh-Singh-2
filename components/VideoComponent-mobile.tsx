import React from 'react';

interface Video {
  source: string;
  title: string;
}

interface VerticalVideoListProps {
  videos: Video[];
  videoWidth: string;
  videoHeight: string;
}

const VerticalVideoList: React.FC<VerticalVideoListProps> = ({ videos, videoWidth, videoHeight }) => {
  return (
    <div className="mt-4">
      {videos.map((video, index) => (
        <div key={index} className="flex flex-col items-center mb-4">
          <iframe
            title={video.title}
            src={video.source}
            width={videoWidth}
            height={videoHeight}
            allowFullScreen
            className="mb-2 rounded-lg overflow-hidden"
            style={{ border: '1px solid #e5e7eb', maxWidth: '90vw' }}
          />
          <h3 className="text-lg font-medium text-center">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VerticalVideoList;

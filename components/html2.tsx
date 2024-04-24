// MyHtmlComponent.js
import React, { useState, useEffect } from 'react';

const MyHtmlComponent2 = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('/ml_notebook.html'); // Assuming the HTML file is served at /welcome.html
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div
    dangerouslySetInnerHTML={{ __html: htmlContent }}
    style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }} // Transparent white background
  />
  
  );
};

export default MyHtmlComponent2;

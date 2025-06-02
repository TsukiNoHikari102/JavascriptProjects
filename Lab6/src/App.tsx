import React, { useState } from 'react';
import './styles.scss';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';

const images = [image1, image2, image3, image4, image5];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(300);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="app-container">
      <div className="image-wrapper">
        <button className="arrow left" onClick={handlePrev}>
          ←
        </button>
        <img
          src={images[currentIndex]}
          alt="Displayed"
          style={{ width: `${width}px` }}
        />
        <button className="arrow right" onClick={handleNext}>
          →
        </button>
      </div>
      <div className="slider-container">
        <input
          type="range"
          min="50"
          max="800"
          value={width}
          step="1"
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default App;
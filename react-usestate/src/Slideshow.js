import React, { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/800x400.png?text=Slide+1',
  'https://via.placeholder.com/800x400.png?text=Slide+2',
  'https://via.placeholder.com/800x400.png?text=Slide+3',
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              background: index === currentIndex ? 'black' : 'white',
              color: index === currentIndex ? 'white' : 'black',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Slideshow
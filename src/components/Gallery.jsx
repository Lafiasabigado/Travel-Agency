import React from 'react'
import { Galleria } from 'primereact/galleria';
import { useEffect, useState } from 'react';
import PhotoService from './PhotoService';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);
    
  useEffect(() => {
      PhotoService.getImages().then((data) => setImages(data));
  }, []); 

  const itemTemplate = (item) => {
      return (
        <div className="flex justify-center">
          <img 
            src={item.itemImageSrc} 
            alt={item.alt} 
            className="rounded-lg shadow-lg"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </div>
      );
  };

  return (
    <div className="card flex flex-col justify-center items-center pt-20 py-5 mx-5">
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <Galleria 
          value={images} 
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
          className="custom-galleria" 
          changeItemOnIndicatorHover 
          showThumbnails={false} 
          showIndicators={false}
          circular
          autoPlay
          transitionInterval={3000}
          item={itemTemplate} 
        />

        {/* Indicateurs personnalisés */}
        <div className="flex justify-center mt-4 gap-2 pt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition-colors cursor-pointer ${
                index === activeIndex ? 'bg-orange-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery

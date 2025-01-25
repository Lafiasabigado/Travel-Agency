import React from 'react'
import { Galleria } from 'primereact/galleria';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState(null);
    
  useEffect(() => {
      PhotoService.getImages().then((data) => setImages(data));
  }, []); 

  const itemTemplate = (item) => {
      return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
  };

  return (
      <div className="card">
          <Galleria value={images} style={{ maxWidth: '640px' }} changeItemOnIndicatorHover showThumbnails={false} showIndicators item={itemTemplate} />
      </div>
  )
}

export default Gallery


const PhotoService = {
  getImages: async () => {
    const response = await axios.get('https://abdias.pythonanywhere.com/api/travels');
    return response.data; 
  }
};

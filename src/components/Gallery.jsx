import React from 'react'
import { Galleria } from 'primereact/galleria';


const Gallery = () => {
  return (
    <div>
        <Galleria 
        value={images} 
        style={{ maxWidth: '640px' }} 
        showThumbnails={false} 
        showIndicators 
        item={itemTemplate} />
    </div>
  )
}

export default Gallery
import React from 'react'
import { Galleria } from 'primereact/galleria';

const Gallery = () => {
  const images = [
    {url:"/gallery1.png"},
    {url:"/gallery2.png"},
    {url:"/gallery3.png"},
  ]

  const itemTemplate = (item) => {
    return <img src={item.url} alt="Image" style={{ width: '100%', display: 'block' }} />;
  }   

  return (
    <div className='pt-10 flex justify-center items-center'>
        <Galleria 
        value={images} 
        style={{ maxWidth: '640px' }} 
        showThumbnails={false} 
        showIndicators= {true}
        showItemNavigators={true}
        showThumbnailsNavigators={true}
        item={itemTemplate} />
    </div>
  )
}

export default Gallery
import axios from 'axios';

const PhotoService = {
    getImages: async () => {
      const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=3');
      return response.data.map((image) => ({
        itemImageSrc: image.download_url,
        alt: image.author,
      })); 
    }
};

export default PhotoService;
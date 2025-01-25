import axios from 'axios';

const PhotoService = {
    getImages: async () => {
      const response = await axios.get('https://api.unsplash.com/ ');
      return response.data; 
    }
};

export default PhotoService;
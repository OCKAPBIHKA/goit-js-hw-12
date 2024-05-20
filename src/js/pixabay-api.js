import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43762394-e72429fa5e3e409aeb4eb6170';

const fetchPhotos = async (searchImage, page) => {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchImage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 12,
    },
  });
  return response.data;
};

export default fetchPhotos;

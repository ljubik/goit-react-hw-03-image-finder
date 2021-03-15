import axios from 'axios';

const API_KEY = "19834065-125c9af840da0921b3970040a";
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(query, page, perPage = 12) {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits);
}

export { fetchImages };

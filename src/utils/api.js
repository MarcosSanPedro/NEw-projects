import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your API URL
});

export default instance;

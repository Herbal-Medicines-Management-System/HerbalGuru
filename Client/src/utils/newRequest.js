import axios from 'axios';

const newRequest = axios.create({
  baseURL: 'http://localhost:8000/',
});

newRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default newRequest;

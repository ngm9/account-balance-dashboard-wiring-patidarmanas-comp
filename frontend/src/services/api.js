import axios from 'axios';

// Simple Axios instance configured to talk to the backend API.
// In Docker, the frontend container can reach the backend on http://backend:5000.
// From a browser on the host machine during local development, use http://localhost:5000.

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default api;

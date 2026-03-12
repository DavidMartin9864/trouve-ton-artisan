import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
});

export const getCategories     = ()         => api.get('/categories');
export const getArtisans       = (params)   => api.get('/artisans', { params });
export const getArtisansDuMois = ()         => api.get('/artisans/du-mois');
export const getArtisanById    = (id)       => api.get(`/artisans/${id}`);
export const sendContact       = (id, data) => api.post(`/contact/${id}`, data);
'use client';

import axios from 'axios';
import axiosRetry from 'axios-retry';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 45000,
});

axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 3000,
  retryCondition: (error) =>
    axiosRetry.isNetworkOrIdempotentRequestError(error) ||
    error.code === 'ECONNABORTED' ||
    (error.response && error.response.status >= 500),
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('userInfo') || 'null');
      if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

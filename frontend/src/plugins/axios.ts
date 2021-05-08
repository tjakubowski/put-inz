import axios from 'axios';
import config from '../config';
import { getJwtToken } from '../utils/auth';

const { api } = config;

const API = axios.create({
  baseURL: `http://${api.hostname}:${api.port}`,
});

API.interceptors.request.use((config) => {
  const token = getJwtToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;

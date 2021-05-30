import axios from 'axios';
import config from '../config';

const { api } = config;

const http = axios.create({
  baseURL: `${api.hostname}:${api.port}`,
  withCredentials: true,
});

export const setAuthHeaders = (accessToken: string | null) => {
  if (accessToken) {
    http.defaults.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    delete http.defaults.headers.Authorization;
  }
};

http.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Redirect on 401

    return Promise.reject(error);
  },
);

export default http;

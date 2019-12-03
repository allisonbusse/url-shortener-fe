import { post, get } from './request';
const BASE_URL = 'http://localhost:7891/api/urls';

export const postUrl = (url) => post(`${BASE_URL}`,
  { originalURL: url });

export const getUrls = () => get(`${BASE_URL}`);


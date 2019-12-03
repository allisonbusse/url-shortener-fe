import { postUrl, getUrls } from '../services/url';
export const CREATE_URL = 'CREATE_URL';

export const createUrl = (url) => dispatch => {
  postUrl(url)
    .then(shortenedUrl =>
      dispatch({
        type: CREATE_URL,
        payload: {
          shortURL: shortenedUrl.shortUrl,
          originalURL: shortenedUrl.originalURL
        }
      }));
};

export const SET_URLS = 'SET_URLS';

export const setUrls = () => dispatch => {
  getUrls()
    .then(urls =>
      dispatch({
        type: SET_URLS,
        payload: urls
      }));
};


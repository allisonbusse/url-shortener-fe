import { CREATE_URL, SET_URLS } from '../actions/urlActions';


export default function reducer(state = [], action) {
  switch(action.type) {
    case CREATE_URL:
      return [...state, action.payload];
    case SET_URLS:
      return action.payload;
    default:
      return state;
  }
}

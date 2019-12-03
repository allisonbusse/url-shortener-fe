import { SET_SESSION, SET_SESSION_LOADING, SET_SESSION_ERROR, RESET_SESSION } from '../actions/sessionActions';

const initialState = {
  _id: null,
  username: null,
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION:
      return { ...action.payload, loading: false, error: null };
    case SET_SESSION_LOADING:
      return { ...state, loading: false, error: null };
    case SET_SESSION_ERROR:
      return { ...state, loading: false, error: action.payload };
    case RESET_SESSION:
      return { ...state, _id: null, username: null };
    default:
      return state;
  }
}

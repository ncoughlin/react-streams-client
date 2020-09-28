import streams from '../apis/streams'
import { CREATE_STREAM, SIGN_IN, SIGN_OUT } from './types'

// change user status to signed in
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

// change user status to signed out
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};


// create stream
export const createStream = formValues => async (dispatch) => {
  const response = await streams.post('./streams', formValues);

  dispatch({ type: CREATE_STREAM, payload:response.data });
};
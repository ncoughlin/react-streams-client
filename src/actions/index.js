import streams from '../apis/streams'
import { SIGN_IN, SIGN_OUT } from './types'

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
export const createStream = formValues => (dispatch) => {
  streams.post('./streams', formValues);
};
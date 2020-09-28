import streams from '../apis/streams'
import {  
  SIGN_IN, 
  SIGN_OUT,
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types'

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
  const response = await streams.post('/streams', formValues);

  dispatch({ type: CREATE_STREAM, payload:response.data });
};

// fetch streams
export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data })
};

// fetch stream
export const fetchStream = (streamId) => async dispatch => {
  const response = await streams.get(`/streams/${streamId}`)

  dispatch({ type: FETCH_STREAM, payload: response.data })
}
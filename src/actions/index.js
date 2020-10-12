import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

// USER AUTHENTICATION ACTIONS
// change user status to signed in
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

// change user status to signed out
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// STREAMS CRUD REST ACTIONS
// fetch streams
export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// fetch stream
export const fetchStream = (streamId) => async (dispatch) => {
  const response = await streams.get(`/streams/${streamId}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

// create stream
export const createStream = (formValues) => async (dispatch, getState) => {
  // retrieve user ID from store
  const { userId } = getState().auth;
  const response = await streams.post("/streams", {...formValues, userId});

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

// update stream
export const editStream = (streamId, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${streamId}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data })
};

// delete stream
export const deleteStream = (streamId) => async (dispatch) => {
  await streams.delete(`/streams/${streamId}`);

  dispatch({ type: DELETE_STREAM, payload: streamId })
};
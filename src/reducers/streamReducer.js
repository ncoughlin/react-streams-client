import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

import _ from "lodash";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return  {...state, ..._.mapKeys(action.payload, 'id')} 

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    // delete payload consists ONLY of ID
    case DELETE_STREAM:
      const { [action.payload]: omit, ...newState } = state;
      return newState;

    default:
      return state;
  }
};

export default streamReducer;

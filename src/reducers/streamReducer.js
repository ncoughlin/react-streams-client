import { FETCH_STREAMS, FETCH_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types'

const streamReducer = (state={}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:

        case FETCH_STREAM:

        case CREATE_STREAM:

        case EDIT_STREAM:
            const newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;

        case DELETE_STREAM:

        default:
            return state;
    }
};

export default streamReducer;
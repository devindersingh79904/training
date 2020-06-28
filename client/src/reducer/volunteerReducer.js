import {
  ADD_VOLUNTEER,
  GET_VOLUNTEERS,
  VOLUNTEERS_ERROR,
} from '../actions/types';

const initialstate = {
  volunteers: [],
  volunteer: null,
};

export default (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_VOLUNTEERS:
      return {
        ...state,
        volunteers: payload,
      };
    case ADD_VOLUNTEER:
      return {
        ...state,
        volunteers: [payload, ...state.volunteers],
      };
    case VOLUNTEERS_ERROR:
      console.log('error while adding drive');

    default:
      return state;
  }
};

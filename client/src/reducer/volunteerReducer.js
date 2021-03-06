import {
  ADD_VOLUNTEER,
  GET_VOLUNTEERS,
  GET_VOLUNTEER,
  UPDATE_VOLUNTEER,
  DELETE_VOLUNTEER,
  VOLUNTEERS_ERROR,
  SET_CURRENT_VOLUNTEER,
} from '../actions/types';

const initialstate = {
  volunteers: [],
  volunteer: null,
  currentVol: null,
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
    case GET_VOLUNTEER:
    case SET_CURRENT_VOLUNTEER:
      return {
        ...state,
        currentVol: payload,
      };
    case VOLUNTEERS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

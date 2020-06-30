import {
  ADD_VOLUNTEER,
  GET_VOLUNTEERS,
  VOLUNTEERS_ERROR,
  SET_CURRENT_VOLUNTEER,
} from "../actions/types";

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
    case SET_CURRENT_VOLUNTEER:
      console.log("i am in ruducer");
      return {
        ...state,
        currentVol: payload,
      };
    case VOLUNTEERS_ERROR:
      console.log("error while adding drive");

    default:
      return state;
  }
};

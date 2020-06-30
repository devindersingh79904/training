import {
  ADD_DRIVE,
  GET_DRIVES,
  DRIVE_ERROR,
  SET_CURRENT_DRIVE,
} from "../actions/types";

const initialstate = {
  drives: [],
  currentDrive: null,
};

export default (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DRIVES:
      return {
        ...state,
        drives: payload,
      };
    case ADD_DRIVE:
      return {
        ...state,
        drives: [payload, ...state.drives],
      };
    case SET_CURRENT_DRIVE:
      return {
        ...state,
        currentDrive: payload,
      };
    case DRIVE_ERROR:
      console.log("error while adding drive");

    default:
      return state;
  }
};

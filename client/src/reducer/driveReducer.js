import {
  SET_LOADING,
  ADD_DRIVE,
  GET_DRIVES,
  GET_DRIVE,
  DRIVE_ERROR,
  SET_CURRENT_DRIVE,
  DRIVE_ASSIGN_VOL,
  DRIVE_ACCEPT_VOL,
  DRIVE_DONE_VOL,
  DRIVE_ATTENDED_STD,
  DRIVE_SHORTLISTED_STD,
} from '../actions/types';

const initialstate = {
  drives: [],
  currentDrive: null,
  loading: false,
};

export default (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DRIVES:
      return {
        ...state,
        drives: payload,
        loading: false,
      };
    case ADD_DRIVE:
      return {
        ...state,
        drives: [payload, ...state.drives],
        loading: false,
      };
    case GET_DRIVE:
    case SET_CURRENT_DRIVE:
      return {
        ...state,
        currentDrive: payload,
        loading: false,
      };

    case DRIVE_ACCEPT_VOL:
      return {
        ...state,
        loading: false,
        drives: state.drives.filter((drive) => {
          if (drive._id === payload.id) {
            drive.volunteersAccepted = [
              drive.volunteersAccepted,
              payload.acceptVolunteers,
            ];
            return drive;
          } else {
            return drive;
          }
        }),
      };
    case DRIVE_ASSIGN_VOL:
      return state;
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DRIVE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

import {
  STUDENTS_ERROR,
  ADD_STUDENT,
  GET_STUDENT,
  GET_STUDENTS,
  DELETE_STUDENT,
  SET_CURRENT_STUDENT,
} from '../actions/types';

const initialstate = {
  students: [],
  student: null,
  currentStudent: null,
};

export default (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [payload, ...state.students],
      };
    case GET_STUDENT:
    case SET_CURRENT_STUDENT:
      return {
        ...state,
        currentStudent: payload,
      };
    case STUDENTS_ERROR:
      console.log('error while adding drive');
    default:
      return state;
  }
};

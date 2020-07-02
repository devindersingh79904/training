import {
  STUDENTS_ERROR,
  ADD_STUDENT,
  GET_STUDENT,
  GET_STUDENTS,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  SET_CURRENT_STUDENT,
} from "../actions/types";

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
    case UPDATE_STUDENT:
      console.log(payload);
      return {
        ...state,
        students: state.students.map((std) =>
          std._id === payload._id ? payload : std
        ),
      };
    case GET_STUDENT:
    case SET_CURRENT_STUDENT:
      return {
        ...state,
        currentStudent: payload,
      };
    case STUDENTS_ERROR:
      console.log("error while adding drive");
    default:
      return state;
  }
};

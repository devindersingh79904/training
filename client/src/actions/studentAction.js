import axios from 'axios';
import { setAlert } from './alertAction';
import {
  STUDENTS_ERROR,
  ADD_STUDENT,
  GET_STUDENT,
  GET_STUDENTS,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  SET_CURRENT_STUDENT,
} from '../actions/types';

export const getStudents = () => async (dispatch) => {
  // if (localStorage.getItem('token')) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const res = await axios.get('http://localhost:5000/api/Student');

    // console.log(res.data);
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STUDENTS_ERROR,
    });
  }
};

export const getStudent = (id) => async (dispatch) => {
  // if (localStorage.getItem('token')) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const res = await axios.get(`http://localhost:5000/api/Student/${id}`);

    // console.log(res.data);
    dispatch({
      type: GET_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STUDENTS_ERROR,
    });
  }
};

export const setCurrentStudent = (body) => (dispatch) => {
  console.log(body);
  dispatch({
    type: SET_CURRENT_STUDENT,
    payload: body,
  });
};

export const updateStudent = (body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:5000/api/Student/${body._id}`,
      body,
      config
    );
    console.log(res);
    dispatch({
      type: UPDATE_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: STUDENTS_ERROR,
    });
  }
};

export const addStudent = (body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      'http://localhost:5000/api/Student',
      body,
      config
    );
    console.log(res);
    dispatch({
      type: ADD_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: STUDENTS_ERROR,
    });
  }
};

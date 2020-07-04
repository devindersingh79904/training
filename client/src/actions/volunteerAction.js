import axios from 'axios';
import { setAlert } from './alertAction';
import {
  GET_VOLUNTEER,
  GET_VOLUNTEERS,
  ADD_VOLUNTEER,
  VOLUNTEERS_ERROR,
  SET_CURRENT_VOLUNTEER,
} from './types';

export const getVolunteers = () => async (dispatch) => {
  // if (localStorage.getItem('token')) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const res = await axios.get('http://localhost:5000/api/Volunteer');
    dispatch({
      type: GET_VOLUNTEERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};

export const getVolunteer = (id) => async (dispatch) => {
  // if (localStorage.getItem('token')) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const res = await axios.get(`http://localhost:5000/api/Volunteer/${id}`);
    dispatch({
      type: GET_VOLUNTEER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};

export const setCurrentVol = (body) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_VOLUNTEER,
    payload: body,
  });
};

export const IncAssined = (id) => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/Volunteer');
    dispatch({
      type: GET_VOLUNTEERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};

export const updateVolunteer = (body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:5000/api/Volunteer/update/${body._id}`,
      body,
      config
    );

    dispatch({
      type: ADD_VOLUNTEER,
      payload: res.data,
    });
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};

export const addVolunteer = (body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      'http://localhost:5000/api/Volunteer',
      body,
      config
    );

    dispatch({
      type: ADD_VOLUNTEER,
      payload: res.data,
    });
    dispatch(setAlert('added Successfully', 'success'));
  } catch (err) {
    var errors = err.response.data;
    dispatch(setAlert(errors.msg, 'danger'));
    dispatch({
      type: VOLUNTEERS_ERROR,
    });
  }
};

import axios from 'axios';
import { setAlert } from './alertAction';
import { GET_VOLUNTEERS, ADD_VOLUNTEER, VOLUNTEERS_ERROR } from './types';

export const getVolunteers = () => async (dispatch) => {
  // if (localStorage.getItem('token')) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const res = await axios.get('http://localhost:5000/api/Volunteer');

    // console.log(res.data);
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
    console.log(res);
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

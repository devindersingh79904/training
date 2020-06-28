import axios from 'axios';
import { setAlert } from './alertAction';
import { GET_VOLUNTEERS, ADD_VOLUNTEER, VOLUNTEERS_ERROR } from './types';

export const getVolunteers = () => (dispatch) => {};

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
